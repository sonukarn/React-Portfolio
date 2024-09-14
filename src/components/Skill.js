import React from "react";
import "./Skill.css";
const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JAVASCRIPT", level: "80%" },
  { name: "REACT", level: "76%" },
  { name: "NODE.JS", level: "70%" },
  { name: "MongoDB", level: "40%" },
  { name: "Tailwind CSS", level: "70%" },
  { name: "Wordpress", level: "60%" },
  { name: "Jest", level: "40%" },
  { name: "WebPack", level: "45%" },
  { name: "Git", level: "65%" },
];
const Skill = () => {
  return (
    <div className="skill-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div style={{ width: "50%" }} key={index}>
            <div className="skill">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-bar">
                <div
                  className={`skill-level level-${index}`}
                  style={{ width: skill.level }}
                >
                  {skill.level}
                </div>
                <style>
                  {`
                   .level-${index}{
                    animation:fillskill-${index} 2s ease forwards;
                }
                        @keyframes fillskill-${index}{
                            from{width:0%}
                            to{width:${skill.level}}
                        }
                       
                        `}
                </style>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
