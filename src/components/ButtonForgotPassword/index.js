import React, { useState } from 'react';
import { ButtonForgotPasswordStyled } from './style.js';
import { useNavigate } from 'react-router-dom'; 
export default function ButtonForgotPassword() {
     const navigate = useNavigate();

    const handleClick = () => {
        navigate('/forgotpassword');
    };

    return(
        <div>
            <ButtonForgotPasswordStyled onClick={handleClick}>
                Forgot your Password?
            </ButtonForgotPasswordStyled>
        </div>
        
    )
}