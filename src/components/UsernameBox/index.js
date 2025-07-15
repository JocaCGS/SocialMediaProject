import React from 'react';
import { EmailInputStyled } from './style.js';

export default function UsernameBox() {
  return (
    <div>
      <EmailInputStyled type="email" placeholder="Email" />
    </div>
  );
}
