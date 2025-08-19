import React from 'react';
import { ButtonMoreStyled, ButtonMoreText } from './style.js';

export default function ButtonMore() {
    return (
        <div>
            <ButtonMoreStyled>
                <i className="bi bi-list"></i>
                <ButtonMoreText>More</ButtonMoreText>
            </ButtonMoreStyled>
        </div>
    );
}
