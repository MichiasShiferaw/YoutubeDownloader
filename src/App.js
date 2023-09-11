
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
    console.log(inputRef.current.value)
    console.log("Hi")
    console.log(process.env.REACT_APP_RAPIDAPI_KEY);
    console.log(process.env.REACT_APP_RAPIDAPI_HOST);

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
      {/* <span className="logo">youtube2mp3</span> */}
      <Navbar/>
      
      <section className="content">
        <h1 className="content_title">Youtube to MP3 Converter</h1>
        <p className="content_description">
          Transform Youtube videos into MP3s in just a few clicks!
        </p>

        <form onSubmit={handleSubmit} className="form">
          <input
            placeholder="Paste Youtube video link"
            ref={inputRef}
            type="text"
            className="form_input"
          />
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
            Download MP3
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
