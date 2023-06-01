import React from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./AcceptedRequests.css";

const AcceptedRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal == true
      ? "profile2_received_request accepted_request_horizontal"
      : "profile2_received_request accepted_request_vertical";
  return (
    <div className="profile_accepted_requests_wrapper">
      <div className="profile_accepted_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Accepted Request <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("3");
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

export default AcceptedRequests;
