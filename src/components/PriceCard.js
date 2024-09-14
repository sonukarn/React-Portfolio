import React from "react";
import "./PriceCard.css";
import { Link } from "react-router-dom";

const PriceCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>Magadh University</h3>
          <span className="bar"></span>
          <p className="btc">Bachelor's in Computer Application</p>
        </div>
        <div className="card">
          <h3>I.SC [10+2]</h3>
          <span className="bar"></span>
          <p className="btc">B.S.E.B</p>
        </div>
        <div className="card">
          <h3>- 10th -</h3>
          <span className="bar"></span>
          <p className="btc">B.S.E.B</p>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
