import React from "react";
import { useHistory } from "react-router-dom";
import "./Signin.scss";

const Signin = () => {
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };
  let loginText = "Get access to your Orders, Wishlist and Recommendations";
  return (
    <div className="flex--row">
      <div className="pageDetails">
        <h1 className="pageDetails__heading">Login</h1>
        <p className="pageDetails__desc">{loginText}</p>
      </div>
      <div className="auth-form">
        <form onSubmit={submitHandler} method="POST" action="/">
          <div className="formRow flex--column">
            <input
              type="email"
              placeholder="Email"
              className="formRow__input-text"
              id="email"
              required
              name="email"
            />
            <label htmlFor="email" className="formRow__labelHelper">
              Email
            </label>
          </div>
          <div className="formRow flex--column">
            <input
              type="password"
              name="password"
              id="password"
              className="formRow__input-text"
              placeholder="Password"
              required
              pattern="(?=.*\d)(?=.*[A-Za-z])(?!.*[\s]).{6,}"
              title="Must contain at least one number, one alphabet and at least 6 or more characters"
            />
            <label htmlFor="password" className="formRow__labelHelper">
              Password
            </label>
          </div>
          <input className="submit" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Signin;
