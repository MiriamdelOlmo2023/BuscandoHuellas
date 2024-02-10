import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { TextField } from '@mui/material';
import './ContactForm.css';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tevd9os', 'template_wbez37g', form.current, 'LcVWBMAVwkBpSGCL-')
      .then((result) => {
        console.log(result.text);
        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-heading">Contacto</h2>
      <form ref={form} onSubmit={sendEmail} className="form">
        <TextField
          id="filled-basic"
          label="Nombre"
          variant="filled"
          type="text"
          name="user_name"
          className="form-input"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="filled-basic"
          label="Correo Electrónico"
          variant="filled"
          type="text"
          name="user_email"
          className="form-input"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <br />
        <TextField
          id="filled-basic"
          label="Mensaje"
          variant="filled"
          type="text"
          name="message"
          className="form-input"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" className="form-button" value="Enviar" />
      </form>
    </div>
  );
};
