import styled from 'styled-components';

// ... outros botões

export const ButtonProfileStyled = styled.button`
    display: inline;
    background-color: #ffffff;
    border: none;
    border-radius: 15px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
    font-size: larger;
    color: rgb(0, 0, 0);
    font-weight: bold;
    justify-content: center;
    position: absolute;
    left: 10px;

    i {
        vertical-align: middle;
    }

    @media (max-width: 680px) {
        width: 30px;
    }
`;

export const ButtonProfileText = styled.span`
    margin-left: 10px;

    @media (max-width: 680px) {
        display: none;
    }
`;
