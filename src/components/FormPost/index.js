import React from 'react';
import {
  PostingDiv,
  NewPostTextarea,
  ButtonArea,
  ButtonAreaLeft,
  ButtonAreaRight,
  CreatePostButton,
  Heading,
} from './style.js';

export default function FormPost() {
  return (
    <PostingDiv>
      <Heading>Feed</Heading>
      <NewPostTextarea placeholder="What are you thinking?" />

      <ButtonArea>
        <ButtonAreaLeft>
          <CreatePostButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-paperclip"
              viewBox="0 0 16 16"
            >
              <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
            </svg>
          </CreatePostButton>
        </ButtonAreaLeft>
        <ButtonAreaRight>
          <CreatePostButton>+</CreatePostButton>
        </ButtonAreaRight>
      </ButtonArea>
    </PostingDiv>
  );
}
