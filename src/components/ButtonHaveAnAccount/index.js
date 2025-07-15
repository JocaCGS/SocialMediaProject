import React, { useState } from 'react';
import { ButtonHaveAnAccountStyled } from './style.js';
import { useNavigate } from 'react-router-dom';

export default function ButtonHaveAnAccount() {
     const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return(
        <div>
            <ButtonHaveAnAccountStyled onClick={handleClick}>
                Login
            </ButtonHaveAnAccountStyled>
        </div>
        
    )
}