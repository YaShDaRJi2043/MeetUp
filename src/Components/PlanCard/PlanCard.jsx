import React from "react";
import "./PlanCard.css";
import {  useNavigate } from "react-router-dom";

const PlanCard = () => {
  var NAVIgate = useNavigate();

  return (
    <div className="plancard">
      <div className="plancard__wrapper">
        <h3 className="plancard__heading">
          SILVER | <span>1 MONTH</span>
        </h3>
        <hr />
        <div className="plancard_pricing">
          <h4>3,000</h4>
          <p>3,000 per month</p>
        </div>

        <div className="plancard__details">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            expedita iusto veritatis, accusantium cum ex dolorum laborum ullam
            sit. Soluta, omnis culpa quod ipsum repellendus
          </p>
        </div>

        <button className="plancard__continue" onClick={()=>NAVIgate("/plandetails")}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
