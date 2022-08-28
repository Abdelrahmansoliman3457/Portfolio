import React from "react";
import Me from "../assets/solia1.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { BsFolder2Open } from "react-icons/bs";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year working</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>clients</h5>
              <small>1+</small>
            </article>
            <article className="about__card">
              <BsFolder2Open className="about__icon" />
              <h5>Projects</h5>
              <small>12+</small>
            </article>
          </div>

          <p>
            Hi, I'm Abdulrahman soliman, a frontend developer who can work as a
            team or as an individual and use the latest techniques to build a
            complete site. Working on time is the perfect time, and respect
            customer opinions for the good of the project. If you're looking for
            a web developer who's doing the perfect job at the perfect time, you
            can text me.
          </p>

          <a href="#contact" className="btn btn-primary">
            let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
