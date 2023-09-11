import React, { useState } from 'react';
import { MenuBar } from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className="navbar">
      <div className="logo1">
        <a href="#">Youtube 2 MP3</a>
      </div>

      <ul className="links">
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        {/* <li>
          <a href="">Language</a>
        </li> */}

      </ul>


      <div className="toggle_btn" onClick={handleClick}>
        <MenuBar className={"w-full h-auto"} />
      </div>

      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <li>
          <a href="home">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        {/* <li>
          <a href="">Language</a>
        </li> */}
      </div>
    </div>
  );
}

export default Navbar