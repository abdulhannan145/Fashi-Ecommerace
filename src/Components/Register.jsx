import React from "react";

const Register = () => {
  return (
    <>
      <div className="main form-main">
        <form>
          <div className="section-heading">
            <h2 className="section-heading__heading">Register</h2>
          </div>
          <div>
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required=""
            />
          </div>
          <div>
            <label for="email">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required=""
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              id="exampleInputPassword1"
              name="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit" className="btn-primary">
            Register
          </button>
          <p className="login-form__link">
            Already registered? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
