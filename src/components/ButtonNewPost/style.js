import styled from 'styled-components';

// ... (outros botões)

export const ButtonNewPostStyled = styled.button`
    display: inline;
    background-color: #000000;
    border: none;
    border-radius: 15px;
    width: 200px;
    height: 35px;
    cursor: pointer;
    font-size: large;
    color: #ffffff;
    font-weight: bold;
    align-self: flex-end;

    i {
        vertical-align: middle;
    }

    @media (max-width: 680px) {
        width: 40px;
    }
`;

export const ButtonNewPostText = styled.span`
    margin-left: 10px;

    @media (max-width: 680px) {
        display: none;
    }
`;
