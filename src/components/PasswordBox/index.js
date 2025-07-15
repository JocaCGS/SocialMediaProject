import React from 'react';
import { PasswordInputStyled } from './style.js';

export default function PasswordBox() {
  return (
    <div>
      <PasswordInputStyled type="password" placeholder="Password" />
    </div>
  );
}
