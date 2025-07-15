import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonTrendingStyled, ButtonTrendingText } from './style.js';

export default function ButtonTrending() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/trending');
    };

    return (
        <div>
            <ButtonTrendingStyled onClick={handleClick}>
                <i className="bi bi-graph-up"></i>
                <ButtonTrendingText>Trending</ButtonTrendingText>
            </ButtonTrendingStyled>
        </div>
    );
}
