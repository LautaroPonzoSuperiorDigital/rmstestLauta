import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/Logo.svg";
import "../App.css";
import "../styles/login.css";
import Swal from "sweetalert2";
import axios from "axios"
import { useStateContext } from "../context/contextProvider";

const Login = () => {
  const navigate = useNavigate();
  const { setUser, setToken } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const payload = {
      email: email,
      password: password,
    };

    axiosClient
      .post("http:localhost:8000/api/login", payload)
      .then(({ data }) => {
        setUser(email);
        setToken("TOKEN_VALUE");
        navigate("/listingsAdmin");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
        });
      });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return regex.test(email);
  };

  return (
    <div className="loginBgContainer">
      <div className="LoginContainer">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="form">
          <input
            className="inputs"
            type="email"
            name="text"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputs"
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="forgotPassword" className="forgot">
            Forgot password?
          </a>
          <button className="button" onClick={(e) => { e.preventDefault(); handleLogin(); }}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
