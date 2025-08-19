import React from 'react';
import './style.css';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonSignUp from '../../components/ButtonSignUp';
import ButtonResetPassword from '../../components/ButtonResetPassword';
import PasswordBox from '../../components/PasswordBox';
import UsernameBox from '../../components/UsernameBox';
import ButtonHaveAnAccount from '../../components/ButtonHaveAnAccount';

export default function ForgotPassword() {
  return (
    <div className="forgotpassword-page">
      <div className="forgotpassword-box">

        <div className="forgotpassword-title">
          <h1>Social Media Project</h1>
        </div> 

        <div className="forgotpassword-subtitle">
          <span className='forgotpasswordtext'>Forgot your password?</span>
          <span className='forgotpasswordtext2'>Enter your email to reset your password .</span>
        </div>

        <div className='forgotpassword-input'>
          <UsernameBox/>
          <ButtonResetPassword />
        </div>

        <div className="forgotpassword-signup">
          Have you remembered the password? <ButtonHaveAnAccount />
        </div>

      </div>
    </div>
  );
}
