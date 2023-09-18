import React from "react";
import BootcampPortfolio from "./BootcampPortfolio";
import MyPortfolio from "./MyPortfolio";
import "./Portfolio.css";
import Contact from "../contact/Contact";

const Portfolio = () => {
  return (
    <section className="portfolioContainer">
      <h1 className="portfolioTitle">Portfolio</h1>
      <BootcampPortfolio />
      <MyPortfolio />
      <Contact />
    </section>
  );
};

export default Portfolio;
