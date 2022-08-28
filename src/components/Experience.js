import React from "react";
import "./experience.css";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/javascript.png";
import Bootstrap from "../assets/bootstrap.png";
import Json from "../assets/json.png";
import Teact from "../assets/reactjs.png";
import Git from "../assets/github.png";
import Jquery from "../assets/jquery.png";
import Next from "../assets/next3.png";

function Experience() {
  return (
    <section id="experience">
      <h5>what skills I have?</h5>
      <h2>My Skills</h2>
      <div className="container">
        <div className="skills">
          <div className="skill-box">
            <div className="skill-text">Html</div>
            <img src={Html} />
          </div>
          <div className="skill-box">
            <div className="skill-text">CSS</div>
            <img src={Css} />
          </div>
          <div className="skill-box">
            <div className="skill-text">Javascript</div>
            <img src={Js} />
          </div>
          <div className="skill-box">
            <div className="skill-text">Bootstrap</div>
            <img src={Bootstrap} />
          </div>
          <div className="skill-box">
            <div className="skill-text">Jquery</div>
            <img src={Jquery} />
          </div>
          <div className="skill-box">
            <div className="skill-text">Json</div>
            <img src={Json} />
          </div>
          <div className="skill-box">
            <div className="skill-text">GitHub</div>
            <img src={Git} />
          </div>
          <div className="skill-box">
            <div className="skill-text">React.js</div>
            <img src={Teact} />
          </div>
          <div className="skill-box">
            <div className="skill-text">Next.js</div>
            <img src={Next} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
