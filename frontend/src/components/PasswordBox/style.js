import styled from 'styled-components';

export const PasswordInputStyled = styled.input`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  width: 350px;
  border-radius: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 3px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
