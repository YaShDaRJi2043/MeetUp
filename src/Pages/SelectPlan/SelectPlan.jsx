import { Search } from "@mui/icons-material";
import React from "react";
import PlanCard from "../../Components/PlanCard/PlanCard";
import "./SelectPlan.css";

const SelectPlan = () => {
  return (
    <div className="selectplan">
      <div className="selectplan__upper">
        <p>Pricinig Table</p>
        <h2>
          Select Your <span>Plan</span>
        </h2>
        <p>Choose the plan that’s right for you.</p>
      </div>
      <div className="selectplan__middle">
        <div className="selectplan_messages_search_input_wrapper">
          <Search />
          <input
            placeholder="Search"
            type="text"
            className="selectplan_messages_search_input"
          />
        </div>

        <div className="selectplan__middle_radios">
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Gold</p>
          </div>
          <div className="selectplan__middle_radio_wrapper">
            <input type="radio" name="plan" id="" />
            <p>Silver</p>
          </div>
        </div>
      </div>

      <div className="selectplan__lower">
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </div>
  );
};
export default SelectPlan;
