import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const LoginPage = () => {
  return (
    <div className="main-content">
      <div className="container">
        <Header />
        <div className="form-container">
          <div className="card">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="input"
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
                />
              </div>
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
          <p className="reg-p">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage