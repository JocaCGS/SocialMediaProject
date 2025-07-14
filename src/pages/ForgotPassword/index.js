import React from 'react';
import './style.css';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonSignUp from '../../components/ButtonSignUp';
import ButtonForgotPassword from '../../components/ButtonForgotPassword';
import ButtonResetPassword from '../../components/ButtonResetPassword';
import ButtonHaveAnAccount from '../../components/ButtonHaveAnAccount';

export default function ForgotPassword() {
  return (
    <div className="forgotpassword-page">
      <div className="forgotpassword-box">
        <h2>Social Media Project</h2>
        <h3>Forgot your password?</h3>
        <p>Enter your email to reset your password.</p>

        <input
          type="email"
          placeholder="Email"
          className="forgotpassword-input"
        />

        <div className="forgotpassword-resetpassword">
          <ButtonResetPassword />
        </div>

        <div className="forgotpassword-haveanaccount">
          <ButtonHaveAnAccount />
        </div>

        <h4>Have you remembered the password?</h4>

      </div>
    </div>
  );
}
