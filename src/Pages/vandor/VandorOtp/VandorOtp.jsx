import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import "./VandorOtp.css";
import OTPInput from "react-otp-input";

const VandorOtp = () => {
  const [otp, setOtp] = useState("");
  const history = useNavigate();
  return (
    <>
      <div>
        <div className="row d-flex justify-content-evenly py-4">
          <div className="left_div col-5 d-xl-flex d-lg-flex d-md-flex d-sm-none d-none">
            <div className="px-4">
              <div className="left_div_mainText">
                Let us help you with your business
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur. Ullamcorper ac commodo
                maecenas sit ultrices Lorem ipsum dolor sit amet consectetur.
                Ullamcorper ac commodo maecenas sit ultrices.
              </div>
            </div>
          </div>
          <div className="col-5 py-5">
            <div>
              <div className="right_div_mainText py-4">Enter OTP</div>
              <div className="otp_text1">An 4 digit code has been sent to</div>
              <div className="Phone_Number">+91 9083445678</div>
              <div className="Otp_Div">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  className="OtpBox"
                />
              </div>
              <div className="otp_text1">
                <span>if you did't receive a code!</span>
                <span className="Otp_Resend">Resend</span>
              </div>
              <div
                className="VandorLogInBtn mx-auto my-4"
                onClick={() => history("/vandor/passwordreset")}
              >
                Verify
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VandorOtp;
