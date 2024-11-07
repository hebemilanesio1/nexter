// ./components/Services.js
// ./components/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css'; 
import businessImg from '../assets/business-intelligence.png';
import itImg from '../assets/it.png';
import multiplataformaImg from '../assets/multiplataforma.png';
import webImg from '../assets/web.png';

function Services() {
  const navigate = useNavigate();

  return (
      <div className="servicios">
          <h2>Nuestros <span className="titulo-destacado">Servicios</span></h2>
          <div className="servicios-contenedor">
              <div className="servicio">
                  <img src={businessImg} alt="Business Intelligence" />
                  <h3>Business Intelligence</h3>
                  <p>Herramienta para tomar decisiones estratégicas, tácticas y operacionales.</p>
                  <button 
                    className="btn-mas-info"
                    onClick={() => navigate('/business-intelligence')}
                  >
                    Más Información
                  </button>
              </div>
              <div className="servicio">
                  <img src={itImg} alt="IT Outsourcing" />
                  <h3>IT Outsourcing</h3>
                  <p>Ofrece soporte IT, mediante atención telefónica, sistemas de tickets online o presencial.</p>
                  <button className="btn-mas-info">Más Información</button>
              </div>
              <div className="servicio">
                  <img src={multiplataformaImg} alt="Desarrollo Multiplataforma" />
                  <h3>Desarrollo Multiplataforma</h3>
                  <p>Compatibles con plataformas web, de escritorio o móviles.</p>
                  <button className="btn-mas-info">Más Información</button>
              </div>
              <div className="servicio">
                  <img src={webImg} alt="Desarrollo Web" />
                  <h3>Desarrollo Web</h3>
                  <p>Con tecnología responsive, escalables y optimizadas para altas demandas.</p>
                  <button className="btn-mas-info">Más Información</button>
              </div>
          </div>
      </div>
  );
}

export default Services;
