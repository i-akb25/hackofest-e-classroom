import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);
      if (response.ok) {
        const res_data = await response.json();
        console.log("res from server", res_data);
        //storing token in localhost
        storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token);
        setUser({
          email: "",
          password: "",
        });
        alert("Login Successful!");
        navigate("/");
      } else {
        alert("invalid credential");
        console.log("invlid credential");
      }
    } catch (error) {
      console.log("login", error);
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form onSubmit={handleSubmit} className="loginForm">
        <label>Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email..."
          required
          autoComplete="off"
          value={user.email}
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password..."
          required
          autoComplete="off"
          value={user.password}
          onChange={handleInput}
        />
        <button className="loginButton">Login</button>
      </form>
      <button type="submit" className="loginRegisterButton">
        <NavLink className="Link" to="/register">
          Register
        </NavLink>
      </button>
    </div>
  );
};

export default Login;
