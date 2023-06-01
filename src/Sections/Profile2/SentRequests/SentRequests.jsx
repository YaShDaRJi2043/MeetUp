import React from "react";
import ReceivedRequestCard from "../../../Components/Profile2/ReceivedRequestCard/ReceivedRequestCard";
import "./SentRequests.css";

const SentRequests = ({ horizontal, setValue }) => {
  var ReceivedRequestsClasses =
    horizontal == true
      ? "profile2_sent_request sent_request_horizontal"
      : "profile2_sent_request sent_request_vertical";
  return (
    <div className="profile_sent_requests_wrapper">
      <div className="profile_sent_requests_wrapper_top">
        <h3 className="profile_requests_title">
          Sent Requests <span>( 04 )</span>
        </h3>
        <p
          onClick={() => {
            setValue("4");
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

export default SentRequests;
