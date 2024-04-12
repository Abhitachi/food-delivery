import React, { useContext, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./Login.css";

const Login = ({ setShowLogin }) => {
  const [loginState, setLoginState] = useState("Sign Up");
  const { setUser } = useContext(StoreContext);
  const { user } = useContext(StoreContext);



  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{loginState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-inputs">
          {loginState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Enter Name"
              required
    
            />
          )}
          <input
            type="text"
            placeholder="Enter Email"
            required
          />
          <input type="password" placeholder="Enter Password" required />
        </div>
        <button>{loginState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>by Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {loginState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setLoginState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setLoginState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
