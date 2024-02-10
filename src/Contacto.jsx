import React from 'react';
import './infoRefugio.css';
import { ContactForm } from './ContactForm';
import gato from './media/145.jpg';

export default function Component() {
  return (
    <div id="contactoForm">
      <img src={gato} id="imgContactoForm" />
      <div id="formularioDiv">
        <ContactForm/>
      </div>
    </div>
  );
}
