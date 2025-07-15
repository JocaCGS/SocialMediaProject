import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonLoginStyled } from './style.js';

export default function ButtonLogin() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/feed');
    };

    return (
        <div>
            <ButtonLoginStyled onClick={handleClick}>
                LOGIN
            </ButtonLoginStyled>
        </div>
    );
}
