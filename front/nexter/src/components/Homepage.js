import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../assets/banner_1.jpg'; // Ruta de la imagen 1
import banner2 from '../assets/banner_2.jpg'; // Ruta de la imagen 2
import banner3 from '../assets/banner_3.jpg'; // Ruta de la imagen 2

const Home = () => {
  return (
    <Carousel interval={700}> {/* Establecer intervalo de 3 segundos (3000 ms) */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="Banner 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Banner 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Banner 3"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;

