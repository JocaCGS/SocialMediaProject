import React, { useState } from 'react';
import './style.css';
import ButtonRegister from '../../components/ButtonRegister';
import NameBox from '../../components/NameBox';
import UsernameBox from '../../components/UsernameBox';
import PasswordBox from '../../components/PasswordBox';
import ConfirmPasswordBox from '../../components/ConfirmPasswordBox';
import { createUser } from '../../api/service'; // ajuste o caminho

export default function SignUp() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setError(null);

    console.log('✅ Dados do formulário:', {
      name,
      email: username,
      password,
      confirmPassword
    });

    if (password !== confirmPassword) {
      setError("Senhas não conferem!");
      console.warn('⚠️ Senhas diferentes!');
      return;
    }

    try {
      const response = await createUser({ name, email: username, password });
      console.log('✅ Resposta do backend:', response.data);

      // redirecione ou mostre mensagem sucesso aqui
    } catch (e) {
      console.error('❌ Erro ao criar usuário:', e);
      setError('Erro ao criar usuário');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="signup-title">
          <h1>Social Media Project</h1>
        </div>

        <div className="signup-subtitle">
          <span className='signuptext'>Create your Account</span>
          <span className='signuptext2'>It's only a few minutes, for free!</span>
        </div>

        <div className='signup-input'>
          <NameBox value={name} onChange={e => setName(e.target.value)} />
          <UsernameBox value={username} onChange={e => setUsername(e.target.value)} />
          <PasswordBox value={password} onChange={e => setPassword(e.target.value)} />
          <ConfirmPasswordBox value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ButtonRegister onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
