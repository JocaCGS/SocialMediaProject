import styled from 'styled-components';

export const PostingDiv = styled.div`
  border-radius: 10px;
  height: 320px;
  padding: 10px;
`;

export const NewPostTextarea = styled.textarea`
  display: flex;
  background-color: #212121;
  border-radius: 10px;
  width: 90%;
  height: 100px;
  border: none;
  resize: none;
  color: white;
  outline: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  padding: 10px;
  margin: 10px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonAreaLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

export const ButtonAreaRight = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 50%;
  margin-right: 40px;
`;

export const CreatePostButton = styled.button`
  display: inline;
  background-color: #1f1f1f;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: larger;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: #7c7c7c;
    color: white;
  }
`;

export const Heading = styled.h1`
  font-size: large;
`;
