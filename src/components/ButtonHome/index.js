import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonHomeStyled, ButtonHomeText } from './style.js';

export default function ButtonHome() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/feed');
    };

    return (
        <div>
            <ButtonHomeStyled onClick={handleClick}>
                <i className="bi bi-house"></i>
                <ButtonHomeText className="buttonhometext">Home</ButtonHomeText>
            </ButtonHomeStyled>
        </div>
    );
}
