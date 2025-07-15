import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonRegisterStyled } from './style.js';

export default function ButtonRegister() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    };

    return (
        <div>
            <ButtonRegisterStyled onClick={handleClick}>
                CREATE ACCOUNT
            </ButtonRegisterStyled>
        </div>
    );
}
