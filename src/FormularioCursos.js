import React, { useState } from 'react';
import axios from 'axios';

function FormularioCursos() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/messages', formData)
      .then(response => {
        alert('Mensaje enviado');
        setFormData({ name: '', phone: '', email: '', message: '' });
      })
      .catch(error => {
        alert('Hubo un error al enviar el mensaje');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="course-form">
      <label>
        Nombre:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Teléfono (opcional):
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Correo Electrónico:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Mensaje:
        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioCursos;