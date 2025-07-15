import React from 'react';
import { ButtonNewPostStyled, ButtonNewPostText } from './style.js';

export default function ButtonNewPost() {
    return (
        <div>
            <ButtonNewPostStyled>
                <i className="bi bi-plus"></i>
                <ButtonNewPostText>Create new post</ButtonNewPostText>
            </ButtonNewPostStyled>
        </div>
    );
}
