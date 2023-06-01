import React from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./ReceivedRequests.css";

const ReceivedRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal == true
      ? "profile2_received_request received_request_horizontal"
      : "profile2_received_request received_request_vertical";

  return (
    <div className="profile_received_requests_wrapper">
      <div className="profile_received_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Received Request <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("2");
          }}
        >
          View All
        </p>
      </div>
      <div className={ReceivedRequestsClasses}>
        <ReceivedRequestCard />
        <ReceivedRequestCard />
        <ReceivedRequestCard />
        <ReceivedRequestCard />
        <ReceivedRequestCard />
        <ReceivedRequestCard />
        <ReceivedRequestCard />
      </div>
    </div>
  );
};

export default ReceivedRequests;
