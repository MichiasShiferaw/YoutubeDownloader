import React, { useState } from 'react';
import {

  SettingIcon,
  MenuBar
} from "./Icon";


const items = [
  {
    id: 1,
    text: "Home",
    link: `/`,
  },
  {
    id: 2,
    text: "About",
    link: "https://github.com/MichiasShiferaw",
    redirect: true,
  },
  {
    id: 3,
    text: "Steps",
    link: `/steps`,
  },
];


const CustomLink = ( {tabs} ) => {
    const [isSettingPopupVisible, setSettingPopupVisible] = useState(false);

    const settingPopup = () => {
      setSettingPopupVisible(!isSettingPopupVisible);
    };
  return (
    <>
      <ul className="links">
        {tabs.map((tab, index) => (
          <li>
            {tab.redirect !== undefined ? (
              <a
                key={index}
                href={tab.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span
                  className="inline-flex justify-center items-center mx-2"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    marginLeft: "0.15rem",
                  }}
                >
                  {tab.icon !== undefined && <>{tab.icon}</>}
                </span>
                {tab.text}
              </a>
            ) : (
              <a key={index} href={tab.link}>
                <span
                  className="inline-flex justify-center items-center mx-2"
                  style={{
                    display: "inline-flex",
                    justifyContent: "center",
                    marginLeft: "0.25rem",
                  }}
                >
                  {tab.icon !== undefined && <>{tab.icon}</>}
                </span>
                {tab.text}
              </a>
            )}
          </li>
        ))}

        {/* Settings, Lang, Github */}
      </ul>
      <nav
        className="logoNav"
        style={{
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <button
          onClick={settingPopup}
          style={{ marginRight: "0.5rem", width: "2rem", backgroundColor:"transparent", border:"none" }}
        >
          <SettingIcon
            style={{ width: "100%", height: "auto" }}
            inner={"#c9c9c9"}
            outer={"#bfbfbf"}
            outline={"#ffe5e5"}
          />
        </button>

      </nav>

      {isSettingPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>This is the Popup!</h2>
            <p>Click outside this box to close.</p>
            <button onClick={settingPopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};


const CustomNavLink = ({ tabs }) => {
      const [isSettingPopupVisible, setSettingPopupVisible] = useState(false);

      const settingPopup = () => {
        setSettingPopupVisible(!isSettingPopupVisible);
      };

  return (
    <>
      <ul className>
        {tabs.map((tab, index) => (
          <li>
            <a
              key={index}
              href={tab.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                className="inline-flex justify-center items-center mx-2"
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  marginLeft: "0.25rem",
                }}
              >
                {tab.icon !== undefined && <>{tab.icon}</>}
              </span>
              {tab.text}
            </a>
          </li>
        ))}
      </ul>

      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={settingPopup}
          style={{
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
            width: "2rem",
          }}
        >
          <SettingIcon
            style={{ width: "100%", height: "auto" }}
            inner={"#c9c9c9"}
            outer={"#bfbfbf"}
            outline={"#ffe5e5"}
          />
        </button>


{/* TODO: Make it cover the whole screen */}
        {isSettingPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <h2>This is the Popup!</h2>
              <p>Click outside this box to close.</p>
              <button onClick={settingPopup}>Close</button>
            </div>
          </div>
        )}

        {/* TODO: Dark Mode */}
      </nav>
    </>
  );
};




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="navbar">
      <div className="logo1">
        <a href="/">Youtube-2-MP3</a>
      </div>

      <CustomLink tabs={items} />



      <div className="toggle_btn" onClick={handleClick}>
        <MenuBar className={"w-full h-auto"} />
      </div>

      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <CustomNavLink tabs={items} />
      </div>
    </div>
  );
}

export default Navbar