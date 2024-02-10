import React from 'react';
import ReactPlayer from 'react-player';
import './infoRefugio.css';
import Mapa from './Mapa.jsx';

export default function Component() {

  return (
    <div>
      <div id="refugio">
        <div id="textRefugio">
          <h1>Nuestro refugio</h1>
          <p id="slogan">¡Echa un vistazo a nuestro tour por el refugio!</p>
          <p>En nuestro refugio, cada cola agitándose representa una historia de esperanza y renovación. Trabajamos incansablemente para brindar un entorno seguro y amoroso, donde cada patita encuentra consuelo y cada latido cuenta una historia de adopción y felicidad.</p>
        </div>
        <div id="video">
          { <ReactPlayer
            url='https://www.youtube.com/watch?v=IiKQSmBto0U'
            controls
            playing
            muted
          /> }
        </div>
      </div>
      <hr></hr>
      <div id="divMapa">
        <Mapa/>
        <div id="textMap">
          <h1>Cómo encontrarnos</h1>
          <p id="slogan">Calle del Ferrocarril n20, Manzanares</p>
          <p>
            Bienvenido a nuestro refugio de animales, un hogar acogedor para animales que buscan una segunda oportunidad.
            Estamos ubicados en un entorno tranquilo y apacible, donde la naturaleza se entrelaza con el compromiso de ofrecer un refugio seguro para aquellos que más lo necesitan.
          </p>
        </div>
      </div>
    </div>
  )
}
