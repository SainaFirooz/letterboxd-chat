import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle registration submission
    console.log("Registering with:", username, password);
  };

  return (
    <div className="main-content">
      <div className="container">
        <Header />
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="card">
            <h1>Register</h1>
            <div className="form-group">
              <label className="label" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="button">
              Register
            </button>
          </div>
          <p className="reg-p">
            Already have an account? <Link to="/">Login</Link>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterPage;