// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const FacebookLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate email and password fields
    const validationErrors = {};
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }
    setErrors(validationErrors);
    // submit form if no errors
    if (Object.keys(validationErrors).length === 0) {
      // handle form submission
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email or Phone:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
};

export default FacebookLoginPage;
