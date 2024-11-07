import React from 'react';
import './About.css'; // Importa el archivo CSS para estilos
import aboutImage from '../assets/team.png'; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <div className="about-content"> {/* Contenedor para el contenido */}
      <div className="about-text-container">
        <h2 className="about-title">Sobre Nosotros</h2>
        <p className="about-text">
          Somos una empresa de tecnología argentina, especializada en el diseño, desarrollo e implementación de soluciones de IT (Information Technology).
        </p>
        <p className="about-text">
          Nexter está constituida por profesionales altamente capacitados en el ámbito de la ingeniería de software, todos ellos dispuestos y preparados para ofrecer soluciones de calidad para su empresa utilizando los recursos tecnológicos de última generación que posibilitan mejorar sus ingresos y hacer más eficiente su negocio, permitiendo a nuestros clientes posicionarse de mejor forma en un mercado competitivo.
        </p>
        <p className="about-text">
          Entre los servicios que ofrecemos se destacan desarrollo de sistemas a medida, desarrollo para Android e iOS, soporte IT y consultoría informática.
        </p>
        <p className="about-text">
          Nos caracterizamos por ser una empresa que busca maximizar las ventajas competitivas de quienes nos contratan, a través de los mejores recursos informáticos, orientándonos al objetivo de convertirnos en socio tecnológico de nuestros clientes, brindando un equipo especializado y proactivo, con el cual creamos soluciones informáticas que ayuden a ahorrar tiempo y costos en gestiones de calidad, producción, mantenimiento, almacenamiento y logística.
        </p>
      </div>
      <img src={aboutImage} alt="Sobre Nosotros" className="about-image" /> {/* Imagen debajo del texto */}
    </div>
  );
};

export default About;




