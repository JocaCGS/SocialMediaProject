import React from 'react';
import { PasswordInputStyled } from './style.js';

export default function PasswordBox({ value, onChange }) {
  return (
    <div>
      <PasswordInputStyled
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
