import React from 'react';
import './Galeria.css'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';


export const Galeria = () => {
  return (
    <div className="galeria pt-5" id='elsa'>
    <Container>
        <div className="text-center">
            <h2 className="display-5 py-5">Galería de Fotos</h2>
        </div>
    <MDBCarousel showControls showIndicators fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='./car1.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='./car2.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='./car3.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel>
   
    </Container>
     </div>
  );
}