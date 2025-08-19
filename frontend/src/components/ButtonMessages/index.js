import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonMessagesStyled, ButtonMessagesText } from './style.js';

export default function ButtonMessages() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/chat');
    };

    return (
        <div>
            <ButtonMessagesStyled onClick={handleClick}>
                <i className="bi bi-chat"></i>
                <ButtonMessagesText>Messages</ButtonMessagesText>
            </ButtonMessagesStyled>
        </div>
    );
}
