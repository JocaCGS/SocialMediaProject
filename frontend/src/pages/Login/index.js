import React from 'react';
import './style.css';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonSignUp from '../../components/ButtonSignUp';
import ButtonForgotPassword from '../../components/ButtonForgotPassword';
import PasswordBox from '../../components/PasswordBox';
import UsernameBox from '../../components/UsernameBox';

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-box">

        <div className="login-title">
          <h1>Social Media Project</h1>
        </div> 

        <div className="login-subtitle">
          <span className='logintext'>Log in to continue</span>
          <span className='logintext2'>Enter your email and password to access.</span>
        </div>

        <div className='login-input'>
          <UsernameBox/>
          <PasswordBox/>
          <ButtonForgotPassword />
          <ButtonLogin />
        </div>

        <div className="login-signup">
          Don't have an account? <ButtonSignUp />
        </div>


      </div>
    </div>
  );
}
