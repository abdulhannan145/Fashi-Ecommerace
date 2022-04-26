import React from "react";

const Login = () => {
  return (
    <>
      <div className="main form-main main-main">
        <form>
          <div className="section-heading">
            <h2 className="section-heading__heading">Log In</h2>
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
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required=""
            />
          </div>
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="login-form__link">
            Don't have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
