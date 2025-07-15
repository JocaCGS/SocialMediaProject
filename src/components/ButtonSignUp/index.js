import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonSignUpStyled } from './style.js';

export default function ButtonSignUp() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/signup');
    };

    return (
        <div>
            <ButtonSignUpStyled onClick={handleClick}>
                Sign Up
            </ButtonSignUpStyled>
        </div>
    );
}
