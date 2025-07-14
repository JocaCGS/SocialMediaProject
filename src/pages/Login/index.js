import React from 'react';
import './style.css';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonSignUp from '../../components/ButtonSignUp';
import ButtonForgotPassword from '../../components/ButtonForgotPassword';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Social Media Project</h2>
        <h3>Log in to continue</h3>
        <p>Enter your email and password to access.</p>

        <input
          type="email"
          placeholder="Email"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <div className="login-login">
          <ButtonLogin />
        </div>

        <div className="login-forgot-password">
          <ButtonForgotPassword />
        </div>

        <div className="login-signup">
          <ButtonSignUp />
        </div>

        <h4>Don't have an account?</h4>

      </div>
    </div>
  );
}
