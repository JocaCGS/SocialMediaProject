import styled from 'styled-components';

export const SearchDiv = styled.div`
  background-color: #ffffff;
  border: 1px solid #d4d4d4;
  width: 350px;
  border-radius: 15px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 3px;

  @media (max-width: 680px) {
    display: none;
  }
`;

export const SearchBox = styled.input`
  background-color: #ffffff;
  border: none;
  flex-grow: 1;
  height: 34px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 14px;
  padding: 0 10px;

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const ButtonSearch = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 15px;
  height: 34px;
  width: 34px;
  cursor: pointer;
  font-size: 18px;
  color: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 5px;

  &:disabled {
    cursor: default;
    opacity: 0.3;
  }
`;
