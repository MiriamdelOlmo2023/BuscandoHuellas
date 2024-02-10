import React from 'react';
import Card from './Card.jsx';
import bingus from './media/animales/bingus.jpg';
import cocodrilo from './media/animales/cocodrilo.jpg';
import gato1 from './media/animales/gato1.jpg';
import gato2 from './media/animales/gato2.jpg';
import jaster from './media/animales/jaster.jpg';
import mono from './media/animales/mono1.jpg';
import pelo from './media/animales/pelo.jpg';
import perro1 from './media/animales/perro1.jpg';
import perro2 from './media/animales/perro2.jpg';
import perro3 from './media/animales/perro3.jpg';
import ratz from './media/animales/ratz.jpg';

export default function Component() {

  return (
    <div>
      <h1 id="tit">Animales en adopción</h1>
        <div id="divAnimales">
        <Card title="Calabacín" description="7 años" img={perro1} loading="lazy" />
        <Card title="Stanley" description="12 años" img={perro2} loading="lazy" />
        <Card title="Ventosa" description="9 años" img={perro3} loading="lazy" />
        <Card title="Cheng" description="11 años" img={pelo} loading="lazy" />
        <Card title="Moisés" description="3 años" img={mono} loading="lazy" />
        <Card title="Rafiq" description="6 meses" img={jaster} loading="lazy" />
        <Card title="Sofía Velasco" description="5 años" img={gato2} loading="lazy" />
        <Card title="Gunter" description="4 días" img={cocodrilo} loading="lazy" />
        <Card title="Bellota Ryan" description="43 años" img={gato1} loading="lazy" />
        <Card title="Trufa" description="212 años" img={bingus} loading="lazy" />
        <Card title="Glitterbomb" description="10011100010011001" img={ratz} loading="lazy" />
      </div>
    </div>
  )
}


