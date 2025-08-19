import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonNotificationsStyled, ButtonNotificationsText } from './style.js';

export default function ButtonNotifications() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/notifications');
    };

    return (
        <div>
            <ButtonNotificationsStyled onClick={handleClick}>
                <i className="bi bi-bell"></i>
                <ButtonNotificationsText>Notifications</ButtonNotificationsText>
            </ButtonNotificationsStyled>
        </div>
    );
}
