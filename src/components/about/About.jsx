import React from "react";
import "./about.css";
import { BsCodeSlash } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import prof from '../../assets/prof.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src={prof}
              alt="About Me"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Worked on basic projects</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Academics</h5>
              <small>8.8 Average CGPA</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Codeability</h5>
              <small>Solved a total of 1500+ programs</small>
            </article>
          </div>

          <p>
            Hello! Introducing me as Ram, an aspiring computer graduate having a 
            passion in software development. A future developer currently working 
            on my skills to enhance myself in my area of interest.
            <br></br>
            
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
