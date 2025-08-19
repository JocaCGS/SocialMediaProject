import React from 'react';
import { ButtonProfileStyled, ButtonProfileText } from './style.js';

export default function ButtonProfile() {
    return (
        <div>
            <ButtonProfileStyled>
                <i className="bi bi-person"></i>
                <ButtonProfileText>Profile</ButtonProfileText>
            </ButtonProfileStyled>
        </div>
    );
}
