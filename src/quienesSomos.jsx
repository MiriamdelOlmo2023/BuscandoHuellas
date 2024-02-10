import React from 'react';
import './infoRefugio.css';
import imgRefugio from './media/refugio1.jpg';

export default function Component() {
  return (
    <div id="contenedorPrincipal">
      <div id="contenido">
        <div id="texto">
          <h1>Quiénes somos</h1>
          <p id="textQuienesSomos">
            Somos un grupo comprometido con el rescate y cuidado de animales abandonados, buscando hogares amorosos. 
          </p>
          <p id="textQuienesSomos">
            ¡Te invitamos a considerar la adopción antes de comprar!
          </p>
        </div>
        <img src={imgRefugio} alt="Imagen del refugio" id="imgRefugio" loading="lazy" />
      </div>
    </div>
  );
}
