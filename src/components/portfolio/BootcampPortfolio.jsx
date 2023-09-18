import React, { useState } from "react";
import "./Portfolio.css";

const BootcampPortfolio = () => {
  const [expandedProjectId, setExpandedProjectId] = useState(null);
  const projects = [
    {
      id: 1,
      // image: simpsons,
      title: "Simpsons Quotes",
      github:
        "https://github.com/davidpiper89/FunctionalBasedReactReduxSimpsons",
      skills: "React.js, React Redux, Axios, Node.js",
      website: "https://simpsons.david-piper-portfolio.co.uk/",
    },
    {
      id: 2,
      // image: weather,
      title: "Weather App",
      github: "https://github.com/davidpiper89/weatherproject",
      skills: "HTML5, CSS, JavaScript, Axios",
      website: "https://vanillajs.david-piper-portfolio.co.uk/",
    },
    {
      id: 3,
      // image: fantasy,
      title: "Fantasy Football App",
      github: "https://github.com/davidpiper89/fantasyfrontendgroup",
      skills: "React.js, React Redux, Axios, CSS, Joi, React Webcam",
      website: "https://fantasy.david-piper-portfolio.co.uk/",
    },
    {
      id: 4,
      // image: fantasy,
      title: "Fantasy Football Backend",
      github: "https://github.com/davidpiper89/fantasyfootballbackendgroup",
      skills:
        "Javascript, Axios, Express, CRUD, Middleware, Nodemailer, MySQL, pHpMyAdmin, Insomnia",
      website: "",
    },
  ];
  return (
    <section className="projectsContainer">
      <h2 className="projectsTitle">Bootcamp Projects</h2>
      {projects.map((project) => (
        <div
          className="projectContainer"
          key={project.id}
          onClick={() =>
            setExpandedProjectId(
              project.id === expandedProjectId ? null : project.id
            )
          }
        >
          <h2 className="projectTitle">{project.title}</h2>

          {project.id === expandedProjectId && (
            <article className="project">
              <div className="image">
                <img src={project.image} alt="" width="300px" height="210px" />
              </div>
              <div className="skills">
                <h3>Skills</h3>
                <p>{project.skills}</p>
              </div>
              <div className="links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="projectGithub"
                >
                  Github
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="projectLink"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          )}
        </div>
      ))}
    </section>
  );
};

export default BootcampPortfolio;
