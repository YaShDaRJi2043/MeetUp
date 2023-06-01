import React from "react";
import "./VandorSignIn.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const VandorSignIn = () => {
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
              <div className="right_div_mainText py-4">Log In</div>
              <div>
                <Form.Text id="passwordHelpBlock" muted>
                  Email/Phone no.:
                </Form.Text>
                <Form.Control
                  type="text"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div>
                <Form.Text id="passwordHelpBlock" muted>
                  Password:
                </Form.Text>
                <Form.Control
                  type="password"
                  id="inputPassword5"
                  aria-describedby="passwordHelpBlock"
                />
              </div>
              <div className="VandorLogInBtn mx-auto my-4">Log in</div>
              <div className="d-flex justify-content-evenly">
                <div>
                  <span
                    style={{
                      color: "grey",
                      fontWeight: "400",
                      paddingRight: "7px",
                    }}
                  >
                    New User?
                  </span>
                  <span className="VandorForgotPass">Sign Up</span>
                </div>
                <div
                  className="VandorForgotPass"
                  onClick={() => history("/vandor/passwordreset/e-mail")}
                >
                  Forgot Password
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VandorSignIn;
