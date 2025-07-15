import styled from 'styled-components';

export const ButtonHaveAnAccountStyled = styled.button`
    display: inline;
    background-color: transparent; 
    border: none;                  
    cursor: pointer;
    font-size: large;
    color: gray;                   
    font-weight: bold;
    text-decoration: underline;   
    border-radius: 0;              
    width: auto;                   
    height: auto;                 
    align-self: flex-end;
    outline: none;                 
    padding: 0;                    
`;

export const ButtonHomeStyled = styled.button`
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
`;

export const ButtonHomeText = styled.span`
    margin-left: 10px;

    @media (max-width: 680px) {
        display: none;
    }
`;

export const ButtonLoginStyled = styled.button`
    display: inline;
    background-color: #000000;
    border: none;
    border-radius: 15px;
    width: 400px;
    height: 35px;
    cursor: pointer;
    font-size: large;
    color: #ffffff;
    font-weight: bold;
    align-self: flex-end;
`;

export const ButtonMessagesStyled = styled.button`
    display: inline;
    background-color: #ffffff;
    border: none;
    border-radius: 15px;
    width: 150px;
    height: 40px;
    cursor: pointer;
    margin-left: 10px;
    font-size: larger;
    color: rgb(0, 0, 0);
    font-weight: bold;
    position: absolute;
    left: 2px;

    i {
        vertical-align: middle;
    }

    @media (max-width: 680px) {
        width: 46px;
    }
`;

export const ButtonMessagesText = styled.span`
    margin-left: 10px;

    @media (max-width: 680px) {
        display: none;
    }
`;
