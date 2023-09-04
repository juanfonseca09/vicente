import React from 'react';
import './Elsa.css';
import { Container, Row, Col } from 'react-bootstrap';

export const Elsa = () => {
  return (
    <>
      <div className="elsa" id='elsa'>
        <Container>
          <Row className='elsa2'>
            <Col md={6} className="p-5">
              <img src="./elsa.jpg" className='img-fluid' alt="Elsa 1"/>
            </Col>
            <Col md={6} className="p-5">
              <h2 className="display-5">Elsa Capillera:</h2>
              <p className='py-3 text-muted'>Nació en Salto un 15 de mayo de 1971, es la menor de 10 hermanos, su padre era obrero y su madre ama de casa. 
Cuando ella tenía ocho años se mudaron a Montevideo y se instalaron en el barrio Borro (Casavalle), donde aún vive junto a su marido y el menor de sus hijos. 
Concurrió a la escuela Santa Bernardita y a los liceos 17 Fransico Acuña de Figueroa y Liceo N⁰ 2 Hector Miranda, lamentablemente en tercero abandonó sus estudios por motivos económicos. 
Su vida laboral empezó a los 11 años como niñera, trabajaba y estudiaba, para los 17 ya se había ido a trabajar como empleada doméstica “con cama” en una casa en Punta del Este. 
Se casó a los 23 y tiene 2 hijos de 29 y 15 años. Tiempo después de su casamiento pudieron comprar una “casa” en el asentamiento Tres Palmas, en donde se convirtió en una referente barrial y social al frente de la presidencia de la comisión del mismo asentamiento. Logrando luego de mucho esfuerzo junto a sus vecinos, la regularización de su hoy barrio. 
Desde el 2006, fue concejal vecinal en tres oportunidades, siendo elegida como secretaria de la mesa del consejo por unanimidad. 
En 2019 le llega la invitación a sumarse al nuevo Partido Político Cabildo Abierto encabezando una lista en las elecciones internas, siendo la lista más votada. En la elecciones Nacionales, vuelve a encabezar una lista a la Cámara de Representantes y con su agrupación denominada “Purificación” fue electa diputada por Cabildo Abierto, logrando nuevamente ser la lista más votada en Montevideo con 23.271 votos. 
Elsa Capillera es una mujer de fe, convencida de que imposible, no hay nada. 
"Donde hay voluntad, siempre hay un camino"</p>
            </Col>
            <Col md={6} className="p-5">
              <p className='py-3 text-muted'>Actividad Parlamentaria de Elsa Capillera:<br/>
Durante esta legislatura ha presentado diversos proyectos de ley, proyectos de resolucion asi como pedidos de informes que se pueden observar en el cuadro "proyectos presentados".  A su vez, ha tenido destacada participacion en las comisiones que integra de la Cámara de Representantes. 
Año 2020: Ingresó a la Cámara de Representantes.
Año 2021: Es elegida Primer Vicepresidente de Cámara, y también ocupó la Presidencia de la Comisión de Vivienda y Ordenamiento Territorial de la Cámara de Diputados. 
Año 2022: Ocupa la Vicepresidencia de la Comisión de Seguridad y Convivencia Ciudadana.
Año 2023: Fue elegida Presidente de la Comisión especial de Cooperativismo.</p>
            </Col>
            <Col md={6} className="p-5">
              <img src="./elsa2.jpeg" className='img-fluid' alt="Elsa 2"/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

