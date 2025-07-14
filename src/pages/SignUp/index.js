import React, { Profiler } from 'react';
import './style.css'; // importando o CSS local da página (opcional)
import FormPost from  '../../components/FormPost'
import ButtonHome from  '../../components/ButtonHome'
import ButtonNotifications from  '../../components/ButtonNotifications'
import ButtonMessages from  '../../components/ButtonMessages'
import ButtonProfile from  '../../components/ButtonProfile'
import ButtonMore from  '../../components/ButtonMore'
import SearchBar from  '../../components/SearchBar'
import ButtonTrending from  '../../components/ButtonTrending'
import ButtonSearch from  '../../components/ButtonSearch'
import ButtonNewPost from  '../../components/ButtonNewPost'
import ButtonLogin from  '../../components/ButtonLogin'
import ButtonSignUp from  '../../components/ButtonSignUp'
import ButtonRegister from  '../../components/ButtonRegister'
import ButtonHaveAnAccount from  '../../components/ButtonHaveAnAccount'
import ButtonForgotPassword from  '../../components/ButtonForgotPassword'

export default function SignUp(){
    return (
         <div className="signup-page">
            <div className="signup-box">
                <h2>Social Media Project</h2>
                <h3>Create your Account</h3>
                <p>It's just for a few minutes, for free!</p>

                <h4>
                <input
                    type="text"
                    placeholder="Name"
                    className="signup-input"
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="signup-input"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="signup-input"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="signup-input"
                />
                </h4>

                <div className="signup-register">
                    <ButtonRegister />
                </div>

                <h5>Already have an account?</h5>

                <div className="signup-haveanaccount">
                    <ButtonHaveAnAccount />
                </div>

              </div>
            </div>
    );
}

const hardcodedprofile = {
  firstName: "Walter",
  lastName: "White",
  age: 52,
  id: 1
}

