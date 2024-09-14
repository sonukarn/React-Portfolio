import React from "react";
import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import Heroimage from "../components/Heroimage";

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Heroimage
        heading="My Skills."
        text="I have enjoyed to Learn these Skills"
      />
      <Skill />
    </div>
  );
};

export default Skills;
