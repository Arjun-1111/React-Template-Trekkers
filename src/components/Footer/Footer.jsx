import React from "react";
import { Link as LinkS } from "react-scroll";

const Footer = ({ mt }) => {
  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        background: "#263238",
        textAlign: "center",
        color: "#f4f4f4",
        marginTop: mt !== null ? mt : "2rem",
      }}
    >
      <div className="icons">
        <LinkS
          to="Home"
          spy={true}
          smooth={true}
          offset={-66}
          duration={500}
          style={{ color: "#fff", cursor: "pointer", marginTop: "2px" }}
        >
          Home
        </LinkS>
        <p className="company-name">
          Trekkers &copy; 2021, ALL Rights Reserved || Made By Arjun
        </p>
      </div>
    </footer>
  );
};

export default Footer;
