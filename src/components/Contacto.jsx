import React from "react";
import "./Contacto.css";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export const Contacto = () => {
  const [validate, setValidate] = useState(false);

  const [mailValidation, setMailValidation] = useState(false);

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const validateEmail = () => {
    validEmail.test(values.email)
      ? setMailValidation(true)
      : setMailValidation(false);
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    validateEmail();
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    setValidate(true);
    if (values.name && mailValidation) {
      emailjs.sendForm("service_d1yqfi4", "template_q60e17d", e.target, "sad");
      // "9lkmUyUuS6TrPmYdK"
      Swal.fire(
        "Mensaje Enviado!",
        "Gracias por contactarnos, nos comunicaremos a la brevedad!",
        "success"
      );
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("btn").disabled = true;
    }
  };

  return (
    <div className="contacto" id="contacto">
      <Container>
        <Row>
          <Col md={7} className="text-center">
            <div className="mx-auto col-10 col-md-8 col-lg-6 py-5">
              <div className="d-flex flex-column align-items-center">
                <h2 className="display-6 mb-3">Sumate a:</h2>
                <br />
                <h2 className="display-5">AGRUPACIÓN PURIFICACIÓN</h2>
              </div>
              <Form className="mt-5" action="#" onSubmit={handleForm}>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Label>Nombre Completo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    id="name"
                    autoComplete="off"
                    value={values.name}
                    onChange={handleInputChange}
                  />
                  {validate === true && !values.name && (
                    <p className="error_message">
                      Debe ingresar un nombre valido.
                    </p>
                  )}
                </Form.Group>
                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Label>Correo Electronico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleInputChange}
                  />
                  {validate === true && mailValidation === false && (
                    <p className="error_message">
                      Debe ingresar un email valido.
                    </p>
                  )}
                </Form.Group>
                <Button
                  id="btn"
                  className="col-6 py-2"
                  variant="outline-danger"
                  type="submit"
                >
                  Sumate
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={5} className="mt-5">
            <div className="ubi p-2 mb-3">
              <h3 className="mt-2">
                <FaMapMarkerAlt size={45} /> Campamento del Cerrito de 1811
              </h3>
              <p>Gral. Flores 3981</p>
              <a href="https://goo.gl/maps/dCL4GXUcCweD5boeA" target="_blank">
                <FaMapMarkedAlt size={20} /> Ver Ubicación
              </a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className="mt-2">
                <FaMapMarkerAlt size={45} /> Comite 2
              </h3>
              <p>direccion comite 2</p>
              <a href="https://goo.gl/maps/o3foBLNykjLPek8n6" target="_blank">
                <FaMapMarkedAlt size={20} /> Ver Ubicación
              </a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className="mt-2">
                <FaMapMarkerAlt size={45} /> Comite 3
              </h3>
              <p>direccion comite 3</p>
              <a href="https://goo.gl/maps/o3foBLNykjLPek8n6" target="_blank">
                <FaMapMarkedAlt size={20} /> Ver Ubicación
              </a>
            </div>
            <div className="ubi p-2 mb-3">
              <h3 className="mt-2">
                <FaMapMarkerAlt size={45} /> Comite 4
              </h3>
              <p>direccion comite 4</p>
              <a href="https://goo.gl/maps/o3foBLNykjLPek8n6" target="_blank">
                <FaMapMarkedAlt size={20} /> Ver Ubicación
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
