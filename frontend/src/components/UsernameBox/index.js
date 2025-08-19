import React from 'react';
import { EmailInputStyled } from './style.js';

export default function UsernameBox({ value, onChange }) {
  return (
    <div>
      <EmailInputStyled
        type="email"
        placeholder="Email"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
