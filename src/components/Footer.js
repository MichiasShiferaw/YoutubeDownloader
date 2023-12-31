import React from "react";
import { GithubIcon, LinkedInIcon, YoutubeIcon } from "./Icon";

const Footer = () => {
  return (
    <div className="footer">
      <a
        href="https://www.linkedin.com/in/michiasshiferaw/"
        target={"_blank"}
        style={{ marginRight: "0.5rem", width: "2rem" }}
      >
        <LinkedInIcon style={{ height: "2.5rem" }} />
      </a>
      <a
        href="https://github.com/MichiasShiferaw"
        target={"_blank"}
        style={{
          marginLeft: "0.5rem",
          marginRight: "0.5rem",
          width: "2rem",
        }}
      >
        <GithubIcon style={{ height: "2.5rem" }} />
      </a>
      <a
        href="https://www.youtube.com/@kuubamusic"
        target={"_blank"}
        style={{ marginLeft: "0.5rem", width: "2rem" }}
      >
        <YoutubeIcon style={{ height: "2.5rem" }} />
      </a>
    </div>
  );
};

export default Footer;
