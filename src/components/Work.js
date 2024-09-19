import "./Work.css";
import React from "react";
import WorkCard from "./WorkCard";
import projectCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="main_container">
      <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {projectCardData.map((val, ind) => {
            return (
              <WorkCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                technology={val.technology}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
