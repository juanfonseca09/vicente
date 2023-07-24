import React from 'react'
import './Contacto.css'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Contacto = () => {
  return (
    <div className="contacto row justify-content-center">
        <Container>
            <div className="mx-auto col-10 col-md-8 col-lg-6 text-center">
            <div className="py-5">
                <h2 className="display-5">Sumate a:</h2><br/>
                <h2 className="display-4">AGRUPACIÓN<br/>PURIFICACIÓN</h2>
            </div>
            <Form>
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
        </Container>
    </div>
  )
}
