import React from 'react'
import './infoRefugio.css';
import gato from './media/gato.gif';

export default function Component() {
  return (
    <div>
        <div id="historiaDiv">
            <img src={gato} alt="Gif de un gato" id="gifGato" />
            <div>
                <h1 id="titHistoria">Nuestra Historia</h1>
                <p>
                    Fundada en 1981, La Protectora de Animales Buscando Huellas surge del compromiso de un grupo unido ante el abandono y maltrato animal. Con modestos inicios, alquilamos una nave para ofrecer refugio a animales desamparados.
                </p>
                <p>
                    A pesar de los desafíos, el apoyo de colaboradores y voluntarios nos impulsa. Cada lametón y ronroneo de agradecimiento refuerza nuestra dedicación a la noble causa de cuidar y proteger a quienes no pueden hacerlo por sí mismos.
                </p>
            </div>
        </div>
        <p id="slogan">"En ningún sitio como en casa"</p>
        <br></br>
        <div id="cargos">
            <div>
                <h2 id="presidente">
                    Presidente
                </h2>
                <p id="presidenteNombre">
                    Moe Szyslak
                </p>
            </div>
            <div>
                <h2 id="vicepresidente">
                    Vicepresidente
                </h2>
                <p id="vicepresidenteNombre">
                    Ned Flanders
                </p>
            </div>
            <div>
                <h2 id="secretario">
                    Secretario
                </h2>
                <p id="secretarioNombre">
                    Milhouse Van Houten
                </p>
            </div>
            <div>
                <h2 id="tesorera">
                    Tesorera
                </h2>
                <p id="tesoreraNombre">
                    Edna Krabappel
                </p>
            </div>
            <div>
                <h2 id="vocal">
                    Vocal
                </h2>
                <p id="vocalNombre">
                    Nelson Muntz
                </p>
            </div>
        </div>
        <hr/>
    </div>
  )
}