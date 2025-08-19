import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonRegisterStyled } from './style.js';

export default function ButtonRegister({ onClick }) {
  const navigate = useNavigate();

  const handleClick = async () => {
    await onClick();
    navigate('/login'); // ou para onde quiser redirecionar
  };

  return (
    <ButtonRegisterStyled onClick={handleClick}>
      CREATE ACCOUNT
    </ButtonRegisterStyled>
  );
}
