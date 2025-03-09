import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faLaptopCode, faScrewdriver } from "@fortawesome/free-solid-svg-icons";

const labelsSecond = ["HTML5", "CSS3", "React", "TypeScript", "JavaScript", "Node.js", "Express.js", "C", "Java", "Kotlin", "Spring", "Rust", "SQL"];

const labelsThird = ["Git", "Docker", "Linux"];

function Expertise() {
  const today = new Date();
  const birthDate = new Date("2001-12-03");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>About me</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Personal Info</h3>
            <p>Hi! I'm Luca, {age} y/o, from Sassari. I moved to Turin for my studies at Politecnico di Torino, where I completed my bachelor's in computer engineering and I am now finishing my master's in software engineering. I'm passionate about technologies and programming, and in my free time I enjoy playing the guitar and playing videogames.</p>
            <div className="flex-chips"></div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faScrewdriver} size="3x" />
            <h3>Skills & Tools</h3>
            <p>I have experience working with a variety of technologies, including JavaScript, Rust and Kotlin, I used these languages to build applications. Additionally, I’m familiar with Git for version control and Docker for containerization, streamlining development and deployment.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Project Experience</h3>
            <p>Throughout my studies, I worked on various university project, both individually and in teams, developing web applications, both frontend and backend, mobile applications and system-level tools. These experiences helped me improve my problem-solving skills, understand the software development lifecycle, and gain hands-on experience with modern technologies.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
