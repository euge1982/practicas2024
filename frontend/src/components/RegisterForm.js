//frontend/src/components/RegisterForm.js
/*import React, { useState } from 'react';
import { registerUser } from '../services/api'; // Importa solo registerUser

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData); // Utiliza registerUser de la API
      alert('Registration successful!');
    } catch (error) {
      console.error(error);
      alert('Error: Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
      <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;*/

// frontend/src/components/RegisterForm.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registro exitoso!'); // O muestra un mensaje adecuado
      navigate('/login'); // Redirige al login después de un registro exitoso
    } catch (error) {
      console.error(error);
      alert('Error: Registro fallido');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} placeholder="Name" required />
      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
      <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Password" required />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;

