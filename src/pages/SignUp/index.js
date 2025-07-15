import React from 'react';
import './style.css';
import ButtonLogin from '../../components/ButtonLogin';
import ButtonSignUp from '../../components/ButtonSignUp';
import ButtonForgotPassword from '../../components/ButtonForgotPassword';
import PasswordBox from '../../components/PasswordBox';
import ConfirmPasswordBox from '../../components/ConfirmPasswordBox';
import UsernameBox from '../../components/UsernameBox';
import NameBox from '../../components/NameBox';
import ButtonRegister from '../../components/ButtonRegister';
import ButtonHaveAnAccount from '../../components/ButtonHaveAnAccount';

export default function SignUp() {
  return (
    <div className="signup-page">
      <div className="signup-box">

        <div className="signup-title">
          <h1>Social Media Project</h1>
        </div> 

        <div className="signup-subtitle">
          <span className='signuptext'>Create your Account</span>
          <span className='signuptext2'>It's only a few minutes, for free!</span>
        </div>

        <div className='signup-input'>
          <NameBox/>
          <UsernameBox/>
          <PasswordBox/>
          <ConfirmPasswordBox/>
          <ButtonRegister />
        </div>

        <div className="signup-signup">
          Already have an account? <ButtonHaveAnAccount />
        </div>

      </div>
    </div>
  );
}
