import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonResetPasswordStyled } from './style.js';

export default function ButtonResetPassword() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <ButtonResetPasswordStyled onClick={handleClick}>
                Reset your password
            </ButtonResetPasswordStyled>
        </div>
    );
}
