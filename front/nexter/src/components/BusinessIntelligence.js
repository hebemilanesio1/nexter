// ./components/BusinessIntelligence.js
import React from 'react';
import businessImg from '../assets/bi_img.jpg';

function BusinessIntelligence() {
  return (
    <div>
      <div className="contenido" style={{ display: 'flex', margin: 0, padding: 0 }}>
        <img 
          src={businessImg} 
          alt="Business Intelligence" 
          style={{ 
            width: '1300px', /* Ajusta el tamaño de la imagen (50% del contenedor) */
          }} 
        />
        <br></br>

        <div style={{ width: '50%', paddingLeft: '20px' }}>
            <br></br>
            <br></br>
          <h2 style={{ fontSize: '32px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>Business Intelligence</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>
            Se denomina Business Intelligence al conjunto de estrategias, aplicaciones, datos, productos, tecnologías y arquitectura técnicas, los cuales están enfocados a la administración y creación de conocimiento sobre el medio, a través del análisis de los datos existentes en una organización o empresa.
          </p>
          <br></br>
          <br></br>
          <h4 style={{ fontSize: '24px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>Motivación para utilizar Business Intelligence</h4>
          <ul style={{ fontSize: '18px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>
            <li>Muchos orígenes de datos distintos que necesitan ser analizados en conjunto.</li>
            <li>Analizar históricos para compararlos con los actuales.</li>
            <li>Optimizar la información para que esté disponible en tiempo y forma.</li>
          </ul>
          <br></br>
          <br></br>
          <h4 style={{ fontSize: '24px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>¿Qué nos permite saber una herramienta de Business Intelligence?</h4>
          <ul style={{ fontSize: '18px', lineHeight: '1.5', fontFamily: '"League Spartan", sans-serif' }}>
            <li>¿Qué ha pasado? (Reportes)</li>
            <li>¿Qué está pasando? (Monitorización)</li>
            <li>¿Por qué pasa? (Análisis)</li>
            <li>¿Qué pasará? (Predicción)</li>
          </ul>
        </div>
      </div>

      {/* Pie de página */}
      <br></br>
      <br></br>
      <br></br>
      <footer style={{ backgroundColor: '#B39DDB', color: 'white', textAlign: 'center', padding: '10px 0', marginTop: '20px' }}>
        <p style={{ margin: 0, fontFamily: '"League Spartan", sans-serif', fontSize: '18px' }}>Nexter</p>
      </footer>
    </div>
  );
}

export default BusinessIntelligence;






