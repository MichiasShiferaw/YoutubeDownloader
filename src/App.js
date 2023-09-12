
import { useRef, useState } from 'react';
import './App.css';

import axios from 'axios';
import parser_utils from './utils';
import Navbar from './components/Navbar';
// import Steps from './components/Steps';
// import Footer from './components/Footer';

function App() {
  const inputRef = useRef();
  const [urlResult,setUrlResult]=useState(null)

  const handleSubmit=(e)=>{
    e.preventDefault()

    const ytID=parser_utils(inputRef.current.value)

    const options = {
      method: "get",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: ytID },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
      },
    }


    axios(options).then(res=> setUrlResult(res.data.link))
    .catch(err=>console.log(err))


    inputRef.current.value="";


  }
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
            <input
              placeholder="Paste Youtube video link"
              ref={inputRef}
              type="text"
              className="form_input"
            />
            {urlResult ? (
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
              <span className=""> </span>
            )}
          </div>
          <button type="submit" className="form_button">
            Search
          </button>
        </form>

        {urlResult ? (
          <a
            target="_blank"
            href={urlResult}
            rel="noreferrer"
            className="download_btn"
          >
            <div className="content1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 452.168 452.168"
                className="w-full h-auto"
              >
                <g>
                  <g>
                    <g>
                      <polygon
                        style={{ fill: "#ffffff" }}
                        points="140.446,344.424 226.096,430.075 311.739,344.424 294.352,327.037 238.395,383.002 
				238.395,216.212 213.798,216.212 213.798,383.002 157.841,327.037 			"
                      />
                    </g>
                    <g>
                      <path
                        style={{ fill: "#ffffff" }}
                        d="M357.34,105.037c-4.072,0-8.185,0.268-12.282,0.797c-20.809-30.458-58.688-46.837-95.681-40.025
				c-17.428-27.109-47.536-43.715-79.985-43.715c-49.064,0-89.414,36.896-94.576,85.139C31.084,116.613,0,154.727,0,200.207
				c0,52.47,42.691,95.161,95.161,95.161h95.031v-24.386H95.169c-39.025,0-70.775-31.75-70.775-70.776
				c0-36.351,27.231-66.606,63.33-70.377l10.909-2.471v-10.12c0-39.017,31.742-70.767,70.767-70.767
				c26.743,0,50.909,14.867,63.07,38.798l4.576,8.998l9.689-2.812c32.051-9.291,65.972,5.406,81.635,33.693l4.406,7.958l8.893-1.951
				c5.202-1.146,10.461-1.731,15.664-1.731c38.855,0,70.467,31.75,70.467,70.775c0,39.017-31.75,70.776-70.776,70.776h-95.698
				v24.386h95.681c52.47,0,95.161-42.691,95.161-95.161C452.168,147.729,409.631,105.037,357.34,105.037z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
              <span className="download_text">Download MP3</span>
            </div>
          </a>
        ) : (
          ""
        )}
      </section>

      {/* <Steps/>

      <Footer/> */}
    </div>
  );
}

export default App;
