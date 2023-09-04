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
              <p className='py-3 text-muted'>Elsa Capillera nació en Salto en 1971, su padre era obrero y su madre, ama de casa. Cuando ella tenía ocho años se vinieron a Montevideo y se instalaron en el Borro.
Concurrió a la escuela Santa Bernardita y a los liceos 17 y Miranda, pero en tercero abandonó los estudios.
Su vida laboral empezó a los 11 años y a los 17 empezó a trabajar como empleada doméstica “con cama” en una casa en Punta del Este.
Con su marido pudieron comprar una “casa” en el asentamiento Tres Palmas, en Casavalle. Se convirtió en referente social de su barrio. Y con su agrupación denominada “Purificación” fue electa diputada por Cabildo Abierto.</p>
            </Col>
            <Col md={6} className="p-5">
              <p className='py-3 text-muted'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, suscipit neque? Commodi facilis necessitatibus quibusdam. Recusandae, distinctio eos atque unde fugiat perferendis. Rem, animi delectus ab voluptatum nulla esse amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam debitis ea quod perferendis commodi earum minima sunt aliquam accusamus fugiat aperiam magni nostrum iure fuga, delectus illo saepe? Mollitia.</p>
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

