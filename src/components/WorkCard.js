import "./WorkCard.css";
import React from "react";

import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
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
    </div>
  );
};

export default WorkCard;
