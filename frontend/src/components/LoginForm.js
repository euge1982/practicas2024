//frontend/src/components/LoginForm.js
/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api'; // Importa solo loginUser

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password); // Utiliza loginUser de la API
      localStorage.setItem('token', data.token);
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert('Error: Invalid login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;*/

// frontend/src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      localStorage.setItem('token', data.token);
      navigate('/gallery'); // Cambia a la ruta de tu galería después de iniciar sesión
    } catch (error) {
      console.error(error);
      alert('Error: Invalid login');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige al formulario de registro
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        ¿No tienes una cuenta?{' '}
        <button onClick={handleRegisterRedirect}>Regístrate aquí</button>
      </p>
    </div>
  );
}

export default Login;

