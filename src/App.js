import { useRef, useState } from "react";
import "./App.css";

import axios from "axios";
import { FileUpload, ParserUtils } from "./utils";
import Navbar from "./components/Navbar";
// import Steps from './components/Steps';
import Footer from "./components/Footer";

// TODO: chrome.downloads.onDeterminingFilename or chrome.downloads.download
//https://developer.chrome.com/docs/extensions/reference/api/downloads

function App() {
  const inputRef = useRef();
  const [urlResults, setUrlResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputUrls = e.target.elements.urlInput.value.trim().split(",");

    const newResults = [];

    for (const inputUrl of inputUrls) {
      const trimmedUrl = inputUrl.trim();

      if (trimmedUrl) {
        const ytID = ParserUtils(trimmedUrl);
        if (!urlResults.some((res) => res.ytId === ytID)) {
          const options = {
            method: "get",
            url: "https://youtube-mp36.p.rapidapi.com/dl",
            params: { id: ytID },
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
            },
          };

          try {
            const response = await axios(options);
            newResults.push({
              link: response.data.link,
              name: response.data.title,
              ytId: ytID,
            });
          } catch (error) {
            console.error("Error fetching download link:", error);
          }
        } else {
          console.log("Duplicate input!");
          continue;
        }
      }
    }
    setUrlResults((prevResults) => [...newResults, ...prevResults]);
    e.target.elements.urlInput.value = "";
  };

  const handleDownloadAll = () => {
    urlResults.forEach(async (result, index) => {
      console.log("Hi");
    });
  };

  const handleInputChange = () => {
    const inputValue = inputRef.current.value;
    const formattedValue = inputValue.replace(/,/g, "\n");
    inputRef.current.value = formattedValue;
  };
  return (
    <div className="App">
      <Navbar />

      <section className="content">
        <h1 className="content_title">Youtube to MP3 Converter</h1>
        <p className="desc">
          Transform Youtube videos into MP3s in just a few clicks!
        </p>

        <form onSubmit={handleSubmit} className="form">
          <div className="input-check">
            <div className="input_container">
              <textarea
                placeholder="Paste YouTube Link"
                ref={inputRef}
                name="urlInput"
                className="form_input"
                onChange={handleInputChange}
              />
              <button className="search" type="submit">
                <span>
                  <svg
                    viewBox="0 0 76 76"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    baseProfile="full"
                    enable-background="new 0 0 76.00 76.00"
                    fill="#000000"
                    stroke="#000000"
                    width="3.2em"
                    height="3.2em"
                    transform="matrix(-1, 0, 0, 1, 0, 0)"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#000000"
                        fill-opacity="1"
                        stroke-width="0.2"
                        stroke-linejoin="round"
                        d="M 42.5,22C 49.4036,22 55,27.5964 55,34.5C 55,41.4036 49.4036,47 42.5,47C 40.1356,47 37.9245,46.3435 36,45.2426L 26.9749,54.2678C 25.8033,55.4393 23.9038,55.4393 22.7322,54.2678C 21.5607,53.0962 21.5607,51.1967 22.7322,50.0251L 31.7971,40.961C 30.6565,39.0755 30,36.8644 30,34.5C 30,27.5964 35.5964,22 42.5,22 Z M 42.5,26C 37.8056,26 34,29.8056 34,34.5C 34,39.1944 37.8056,43 42.5,43C 47.1944,43 51,39.1944 51,34.5C 51,29.8056 47.1944,26 42.5,26 Z "
                      ></path>{" "}
                    </g>
                  </svg>
                  ;
                </span>
              </button>
            </div>

            {urlResults.length > 0 ? (
              <span className="checkbox">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  width="40px"
                  height="40px"
                >
                  <circle cx="52" cy="52" r="44" opacity=".35" />
                  <circle cx="50" cy="50" r="44" fill="#f2f2f2" />
                  <path
                    fill="#f2f2f2"
                    d="M50,91C27.393,91,9,72.607,9,50S27.393,9,50,9s41,18.393,41,41S72.607,91,50,91z"
                  />
                  <circle cx="50.026" cy="50.026" r="38.026" fill="#96c362" />
                  <circle
                    cx="50"
                    cy="50"
                    r="37.5"
                    fill="none"
                    stroke="#40396e"
                    stroke-miterlimit="10"
                    stroke-width="3"
                  />
                  <g>
                    <path
                      fill="#285e2c"
                      d="M42.017,65c-0.767,0-1.534-0.292-2.119-0.877l-10.017-10c-1.173-1.17-1.175-3.07-0.004-4.243 c1.17-1.173,3.07-1.175,4.242-0.003l7.896,7.882l23.881-23.88c1.172-1.172,3.07-1.172,4.242,0c1.172,1.171,1.172,3.071,0,4.242 l-26,26C43.552,64.707,42.784,65,42.017,65z"
                    />
                  </g>
                </svg>
              </span>
            ) : (
              <span></span>
            )}
          </div>
          {/* <button type="submit" className="form_button">
            Search
          </button> */}
          {/* <button type="button" className="form_button">
            Import from files
          </button> */}
          <FileUpload/>
        </form>

        {urlResults.length > 0 ? (
          <div className="content1">
            <div style={{ display: "flex", justifyContent: "end" }}>
              <div>
                <button
                  type="button"
                  className="downloadAll"
                  onClick={handleDownloadAll}
                >
                  Download all
                </button>
              </div>
            </div>

            <div className="container"></div>
            <table className="container">
              <thead>
                <tr>
                  <th>Thumbnails</th>
                  <th className="name">Name</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {urlResults.map((result, index) => (
                  <tr key={index}>
                    <td className="thumbnails">
                      {/* <img src="./yticon.png"></img> */}
                    </td>
                    {/* TODO: Hover shows name */}
                    <td className="name">{result.name}</td>
                    <td className="download">
                      <a
                        className="download text"
                        target="_blank"
                        href={result.link}
                        rel="noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <span></span>
        )}
      </section>

      {/* <Steps/>*/}

      <Footer />
    </div>
  );
}

export default App;
