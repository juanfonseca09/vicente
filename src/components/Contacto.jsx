import React from 'react';
import './Contacto.css';
import { Container, Row, Col } from 'react-bootstrap'; // Importa Row y Col
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaMapMarkedAlt } from 'react-icons/fa';

export const Contacto = () => {
  return (
    <div className="contacto" id='contacto'>
      <Container>
        <Row>
          {/* Parte Izquierda */}
          <Col md={7} className="text-center">
            <div className="mx-auto col-10 col-md-8 col-lg-6 py-5">
              <div className="d-flex flex-column align-items-center"> {/* Agregado */}
                <h2 className="display-6 mb-3">Sumate a:</h2>
                <br/>
                <h2 className="display-5">AGRUPACIÓN PURIFICACIÓN</h2> {/* Corregido */}
              </div>
              <Form className='mt-5'>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control type="email" placeholder="E-mail" />
                </Form.Group>
                <Button className='col-6 py-2' variant="outline-danger" type="submit">
                  Sumate
                </Button>
              </Form>
            </div>
          </Col>
          
          {/* Parte Derecha */}
          <Col md={5} className="mt-5">
            <div className="ubi p-2 mb-3">
              <h3 className='mt-2'><FaMapMarkerAlt size={45}/>  Comite 1</h3>
              <p>direccion comite1 15324</p>
              <a href='https://goo.gl/maps/o3foBLNykjLPek8n6' target="_blank"><FaMapMarkedAlt size={20}/>  Ver Ubicación</a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className='mt-2'><FaMapMarkerAlt size={45}/>  Comite 1</h3>
              <p>direccion comite1 15324</p>
              <a href='https://goo.gl/maps/o3foBLNykjLPek8n6' target="_blank"><FaMapMarkedAlt size={20}/>  Ver Ubicación</a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className='mt-2'><FaMapMarkerAlt size={45}/>  Comite 1</h3>
              <p>direccion comite1 15324</p>
              <a href='https://goo.gl/maps/o3foBLNykjLPek8n6' target="_blank"><FaMapMarkedAlt size={20}/>  Ver Ubicación</a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className='mt-2'><FaMapMarkerAlt size={45}/>  Comite 1</h3>
              <p>direccion comite1 15324</p>
              <a href='https://goo.gl/maps/o3foBLNykjLPek8n6' target="_blank"><FaMapMarkedAlt size={20}/>  Ver Ubicación</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
