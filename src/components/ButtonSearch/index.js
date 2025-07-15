import React from 'react';
import { ButtonSearchStyled, ButtonSearchText } from './style.js';

export default function ButtonSearch() {
    return (
        <div>
            <ButtonSearchStyled>
                <i className="bi bi-search"></i>
                <ButtonSearchText>Search</ButtonSearchText>
            </ButtonSearchStyled>
        </div>
    );
}
