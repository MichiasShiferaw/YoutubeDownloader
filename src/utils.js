import React, { useState } from 'react'

export function ParserUtils(url) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

// TODO: Hide Choose File Comp

export function FileUpload(){
  const [txtFile,setTxtFile]=useState();

  const [isOpen,isSetOpen]= useState(true);


  function handleFile(event){
    const file = event.target.files[0];


    if (file && file.type === "text/plain") {
      setTxtFile(file);
    } else {
      alert("Please upload a valid .txt file.");
    }

  }

  function handleUpload(){

    
    if (txtFile) {
      const reader = new FileReader();
      console.log("Michias");
    }
    const formData = new FormData()
    formData.append("file", txtFile);
  }

    const handleClose = () => {
      isSetOpen(false);
    };

  return (
    <>
      {isOpen && (
        <div className="wrapper">
          <header>
            <p>Import from files </p>{" "}
            <button
              onClick={handleClose}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "1.8rem",
              }}
            >
              &#10006;
            </button>
          </header>
          <form onSubmit={handleUpload} className="">
            <input
              type="file"
              name="txtfile"
              onChange={handleFile}
              accept=".txt"
            />
            Browse File to Upload
            <p className="form_button">.txts files only</p>
          </form>
        </div>
      )}
    </>
  );
}