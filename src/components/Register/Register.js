import React from "react";
import { useHistory } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  const history = useHistory();
  const submitHandler = (e) => {
    if (e.target[3].value === e.target[4].value) {
      e.preventDefault();
      history.push("/");
    } else {
      alert("Password does not match");
      e.preventDefault();
    }
  };
  let signupText = "We do not share your personal details with anyone.";
  return (
    <div className="flex--row">
      <div className="pageDetails">
        <h1 className="pageDetails__heading">Signup</h1>
        <p className="pageDetails__desc">{signupText}</p>
      </div>
      <div className="auth-form">
        <form onSubmit={submitHandler} method="POST" action="/">
          <div className="formRow flex--column">
            <input
              type="text"
              placeholder="First Name"
              className="formRow__inputText"
              id="firstName"
              required
              name="firstName"
            />
            <label htmlFor="firstName" className="formRow__labelHelper">
              first Name
            </label>
          </div>
          <div className="formRow flex--column">
            <input
              type="text"
              placeholder="Last Name"
              className="formRow__inputText"
              id="lastName"
              required
              name="lastName"
            />
            <label htmlFor="lastName" className="formRow__labelHelper">
              Last Name
            </label>
          </div>
          <div className="formRow flex--column">
            <input
              type="email"
              placeholder="Email"
              className="formRow__inputText"
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
              className="formRow__inputText"
              placeholder="Password"
              required
              pattern="(?=.*\d)(?=.*[A-Za-z])(?!.*[\s]).{6,}"
              title="Must contain at least one number, one alphabet and at least 6 or more characters"
            />
            <label htmlFor="password" className="formRow__labelHelper">
              Password
            </label>
          </div>
          <div className="formRow flex--column">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="formRow__inputText"
              placeholder="Confirm Password"
              required
              pattern="(?=.*\d)(?=.*[A-Za-z])(?!.*[\s]).{6,}"
              title="Must contain at least one number, one alphabet and at least 6 or more characters"
            />
            <label htmlFor="confirmPassword" className="formRow__labelHelper">
              Confirm Password
            </label>
          </div>
          <input className="submit" type="submit" value="SignUp" />
        </form>
      </div>
    </div>
  );
};

export default Register;
