// SliderAnimales.jsx
import React from 'react';
import Slider from 'react-slick';
import Card from './Card2.jsx'; // Asegúrate de tener un componente Card

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

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderStyles.css'; // Asegúrate de tener este archivo con los estilos

const SliderAnimales = () => {
  const animales = [
    { 
      title: "Calabacín",
      age: "7 años",
      description: "Un perro encantador",
      img: perro1,
      story: "Calabacín fue rescatado de la calle cuando era solo un cachorro. Desde entonces, ha demostrado ser un compañero leal y lleno de amor, siempre dispuesto a alegrar el día con su entusiasmo y afecto."
    },
    { 
      title: "Stanley",
      age: "12 años",
      description: "Siempre sonriente",
      img: perro2,
      story: "Stanley es conocido por su eterna sonrisa y actitud positiva. Adoptado de un refugio, ha superado muchos obstáculos y se ha convertido en un miembro querido de la familia, inspirando a todos con su alegría contagiosa."
    },
    { 
      title: "Ventosa",
      age: "9 años",
      description: "Amante del agua",
      img: perro3,
      story: "Ventosa fue rescatada de una situación de abandono y rápidamente mostró su amor por el agua. Ya sea en la playa o en una piscina, esta perrita disfruta chapoteando y haciendo amigos tanto humanos como caninos."
    },
    { 
      title: "Cheng",
      age: "11 años",
      description: "Juguetón y curioso",
      img: pelo,
      story: "Cheng, el gato travieso, fue encontrado en un callejón. Desde entonces, ha llenado su hogar con risas y momentos divertidos. Su curiosidad inagotable lo lleva a explorar cada rincón y rincón de su entorno."
    },
    { 
      title: "Moisés",
      age: "3 años",
      description: "Mono muy activo",
      img: mono,
      story: "Moisés, el mono, es una bola de energía. Rescatado de un tráfico ilegal de animales, ha encontrado un hogar amoroso donde puede saltar, jugar y expresar su naturaleza juguetona sin restricciones."
    },
    { 
      title: "Rafiq",
      age: "6 meses",
      description: "Adorable cachorro",
      img: jaster,
      story: "Rafiq, el cachorro juguetón, llegó a la familia como el más pequeño pero más juguetón de la camada. Con cada día que pasa, descubre el mundo con entusiasmo y se convierte en el corazón latente de la casa."
    },
    { 
      title: "Sofía Velasco",
      age: "5 años",
      description: "Gata elegante",
      img: gato2,
      story: "Sofía Velasco, la gata elegante, fue rescatada de la calle y rápidamente mostró su gracia y elegancia. Siempre se sienta con majestuosidad y cautiva a todos con su encanto felino."
    },
    { 
      title: "Gunter",
      age: "4 días",
      description: "Pequeño cocodrilo",
      img: cocodrilo,
      story: "Gunter, el pequeño cocodrilo, fue encontrado cerca de un río. Aunque es pequeño, su apariencia no engaña, ya que tiene un corazón valiente y está listo para enfrentar el mundo, explorando su hábitat día a día."
    },
    { 
      title: "Bellota Ryan",
      age: "43 años",
      description: "Amante de las siestas",
      img: gato1,
      story: "Bellota Ryan, el gato amante de las siestas, ha pasado la mayor parte de su vida disfrutando de una vida tranquila. Siempre listo para una siesta cómoda, este gato ha ganado el corazón de todos con su actitud relajada y cariñosa."
    },
    { 
      title: "Trufa",
      age: "212 años",
      description: "Gato misterioso",
      img: bingus,
      story: "Trufa, el gato misterioso, es una enigma. Con una edad aparentemente interminable, ha vivido a lo largo de las eras. Su sabiduría y aura misteriosa han dejado a todos fascinados y preguntándose sobre los secretos que guarda."
    },
    { 
      title: "Glitterbomb",
      age: "10011100010011001",
      description: "Ratón electrónico",
      img: ratz,
      story: "Glitterbomb, el ratón electrónico, no es un ratón común. Con un código binario como edad, fue creado en el laboratorio de un científico loco. Aunque sus orígenes son inciertos, ha demostrado ser una compañía única y fascinante."
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    prevArrow: <div className="slick-prev"></div>, // Flecha anterior
    nextArrow: <div className="slick-next"></div>, // Flecha siguiente
  };
  const sliderContainerStyle = {
    width: '90%',
    margin: '0 auto',
  };

  return (
    <div style={sliderContainerStyle}>
      <h1 id="tit">Animales en adopción</h1>
      <Slider {...settings}>
        {animales.map((animal, index) => (
          <Card key={index} title={animal.title} description={animal.description} img={animal.img} story={animal.story} age={animal.age} />
        ))}
      </Slider>
    </div>
  );
};

export default SliderAnimales;
