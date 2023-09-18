import React from "react";
import "./Biography.css";

const Biography = () => {
  return (
    <section className="bioContainer">
      <div>
        Hello! I'm David. I am a full stack web developer and computer
        enthusiast. Deciding to develop my computer skills at the Jump Digital
        School, where I completed their rigorous Professional Software
        Engineering Bootcamp. With additional invaluable experience and insights
        during my nearly decade-long tenure with the NHS.
      </div>
      <div>
        Curious about the Jump Digital School? Check out their{" "}
        <a href="https://www.thejump.tech/">website</a> to learn more.
      </div>
      <div>
        On the technical side, I'm adept in frontend technologies like HTML5,
        CSS/SASS, JavaScript, TypeScript, and React JS. When it comes to
        backend, I'm skilled in Node.js, Express, SQL, NoSQL, and phpMyAdmin.
        Along with more.
      </div>
    </section>
  );
};

export default Biography;
