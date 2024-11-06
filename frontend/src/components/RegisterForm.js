// frontend/src/components/RegisterForm.js

import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
  const navigate = useNavigate();

  // Función de registro
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registro exitoso!'); // Mensaje de registro exitoso
      navigate('/login'); // Redirige al login después de un registro exitoso
    } catch (error) {
      console.error(error);
      alert('Error: Registro fallido');
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className='register-form'>
        <h1>Registro</h1>
        <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} placeholder="Name" required />
        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
        <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
