import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "../store/auth";

const register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  }); //user is a state variable and SetUser is an updated function and usestate is a hook

  const Navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, // as we make name dynamic, we can change value of username on web. dynamic means name could be any field that we type on
      //we are storing inputs in state(as we did in Postman) in devtools whatever user is giving as input
      //And now we have to connect our Registration for to our backend(to pass the data(storing in State..to mongo))
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents from reloading
    console.log(user); //is shown in console of devtools
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      //empty the form and redirect to login page
      if (response.ok) {
        const res_data= await response.json();
        console.log("res from server", res_data);
        //storing token in localhost
         storeTokenInLS(res_data.token);
        // localStorage.setItem("token",res_data.token);  //token will be used at so many plces so we write it using useContext to prevent prop-drilling.
        setUser({
          username: "",
          email: "",
          password: "",
        });

        Navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit} className="registerForm">
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          name="username"
          id="username"
          required
          autoComplete="off"
          value={user.username} //this will display default value of user.username in page(unchangeable)
          onChange={handleInput}
          placeholder="Enter your username..."
        />
        <label>Email</label>
        <input
          className="registerInput"
          name="email"
          type="text"
          placeholder="Enter your email..."
          id="email"
          required
          autoComplete="off"
          value={user.email} //this will display default value of user.username in page(unchangeable)
          onChange={handleInput}
        />
        <label>Password</label>
        <input
          className="registerInput"
          name="password"
          type="password"
          placeholder="Enter your password..."
          id="password"
          required
          autoComplete="off"
          value={user.password} //this will display default value of user.username in page(unchangeable)
          onChange={handleInput}
        />
        <button type="submit" className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <NavLink className="Link" to="/login">
          Login
        </NavLink>
      </button>
    </div>
  );
};
export default register;
