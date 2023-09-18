import React from "react";
import "./Header.css";
import CV from "./../../assets/CV.pdf";

const Header = () => {
  return (
    <header className="headerContainer">
      <section className="nameContainer">
        <div className="firstName">D</div>
        <div className="secondName">p</div>
        <div className="firstName shiftedLeft15">a</div>
        <div className="secondName shiftedRight">i</div>
        <div className="firstName">v</div>
        <div className="secondName shiftedLeft10">p</div>
        <div className="firstName shiftedLeft10">i</div>
        <div className="secondName">e</div>
        <div className="firstName shiftedLeft15">d</div>
        <div className="secondName">r</div>
      </section>
      <section className="titleContainer">
        <div>Software Engineer</div>
      </section>
      <section className="ctaContainer">
        <a href={CV} download className="cvBtn">
          Download CV
        </a>
      </section>
    </header>
  );
};

export default Header;
