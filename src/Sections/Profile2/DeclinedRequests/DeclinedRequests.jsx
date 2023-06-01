import React from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./DeclinedRequests.css";

const DeclinedRequests = ({ horizontal, setValue }) => {
  var declinedRequestsClasses =
    horizontal == true
      ? "profile2_declined_request declined_request_horizontal"
      : "profile2_declined_request declined_request_vertical";
  return (
    <div className="profile_declined_requests_wrapper">
      <div className="profile_declined_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Declined Requests <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("4");
          }}
        >
          View All
        </p>
      </div>
      <div className={declinedRequestsClasses}>
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

export default DeclinedRequests;
