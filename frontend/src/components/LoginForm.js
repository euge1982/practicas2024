// frontend/src/components/LoginForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import './LoginForm.css';

function Login() {
  const [email, setEmail] = useState('');   // Cambia 'email' a 'email'
  const [password, setPassword] = useState('');   // Cambia 'password' a 'password'
  const navigate = useNavigate();   // Cambia 'navigate' a 'navigate'

  // Función de inicio de sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);   
      localStorage.setItem('token', data.token);   // Guarda el token en el almacenamiento local
      navigate('/gallery'); 
    } catch (error) {
      console.error(error);
      alert('Error: Invalid login');
    }
  };

  // Función para redirigir al formulario de registro 
  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige al formulario de registro
  };

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h1>Login</h1>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p className='register-link'>
        ¿No tienes una cuenta?{' '}
        <button onClick={handleRegisterRedirect} className='register-button'>Regístrate aquí</button>
      </p>
    </div>
  );
}

export default Login;
