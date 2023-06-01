import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [name, setName] = useState("");
  const naviGATE = useNavigate();
  const token = localStorage.getItem("token");

  const getUset = async () => {
    const res = await fetch(
      "https://metrimonial.onrender.com/api/profile/userdetails",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      }
    );
    const data = await res.json();
    console.log(data.data.UserDetails[0].user_name);
    setName(data.data.UserDetails[0].user_name);
  };

  useEffect(() => {
    getUset();
  }, []);
  return (
    <div className="header">
      <Link to="/" className="h2__link">
        <h2 className="header__h2">
          Meet
          <span>Up</span>
        </h2>
      </Link>
      <div className="header__links">
        <a href="/">Home</a>
        <a href="/services">Our Services</a>
        <a href="/SelectPlan">Our Plans</a>
        <Link to="/ContactUs">Contact Us</Link>

        {token ? (
          <p
            className="AfterLogheader__button"
            onClick={() => naviGATE("/userprofile")}
          >
            Welcome,
            <br />
            {name}
          </p>
        ) : (
          <p className="header__button" onClick={() => naviGATE("/login")}>
            Login
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
