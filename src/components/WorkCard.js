import "./WorkCard.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-item">
      <div className="project-card">
        <div className="img-container">
          <img src={props.imgsrc} alt={props.title} className="project-image" />
        </div>
        <div className="description">
          <div className="project-title">
            <p>{props.title}</p>
          </div>
          <div className="project-subtitle">
            {props.technology.map((tech) => (
              <div key={tech}>{tech}</div>
            ))}
          </div>
          <div className="icons description_link">
            <Link to={props.view} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faCode} className="icon" />
            </Link>
            <Link to={props.source} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLink} className="icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

{
  /* <div className="project-card">
<img src={props.imgsrc} alt="imgae" />
<h2 className="project-title">{props.title}</h2>
<div className="pro-details">
  <p>{props.text}</p>
  <div className="pro-btns">
    <a className="btn" href={props.view} target="_blank" rel="noreferrer">
      View
    </a>
    <a
      href={props.source}
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      Source
    </a>
  </div>
</div>
</div> */
}
