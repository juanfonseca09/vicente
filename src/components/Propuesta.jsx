import React from "react";
import "./Propuesta.css";
import { Button, Carousel, Container, Ratio } from "react-bootstrap";
import { Parallax } from "react-parallax";

export const Propuesta = () => {
  return (
    <Parallax bgImage={'./fondo2.png'} strength={120}>
    <div className="propuesta" id="propuesta">
  <Container>
    <div className="col-md-6 mx-auto text-center pt-5">
      <h2 className="display-4 py-5">Nuestra Propuesta</h2>
      <hr className="py-2"/>
      <p className="p-4">
        Existen asuntos pendientes y desafíos emergentes que plantean preguntas al país, debido a errores pasados y problemas persistentes que la evolución de nuestra realidad ha puesto al descubierto. Para ambos escenarios, se hace necesario implementar políticas integrales de estado con la participación activa de todos los actores involucrados en cada proceso. Junto a ello, se requiere una nueva visión en las políticas públicas, destacando la importancia de la transversalidad sistémica, enfocada en proyectos y programas a largo plazo. Enfatizamos la importancia de articular medidas que impacten simultáneamente en los principales objetivos que se buscan alcanzar, ya que estos están estrechamente interconectados. Nuestra meta es lograr una sociedad más cohesionada y adaptada a los desafíos venideros, tomando en cuenta las lecciones aprendidas y enfrentando los problemas con determinación y colaboración. Solo así podremos forjar un futuro próspero y sostenible para todos los ciudadanos.
      </p>
      <div className="py-5 p-5">
        <Carousel interval={null}>
          <Carousel.Item>
            <Ratio aspectRatio="4x3">
              <iframe src="https://www.youtube.com/embed/ok6zbLndnX0?autoplay=0" allow="fullscreen;" ></iframe>
            </Ratio>
          </Carousel.Item>
          <Carousel.Item>
            <Ratio aspectRatio="4x3">
              <iframe src="https://www.youtube.com/embed/E5xJE442Vb0?autoplay=0" allow="fullscreen;" ></iframe>
            </Ratio>
          </Carousel.Item>
          <Carousel.Item>
            <Ratio aspectRatio="4x3">
              <iframe src="https://www.youtube.com/embed/hy1wOWnj-0M?autoplay=0" allow="fullscreen;" ></iframe>
            </Ratio>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  </Container>
</div>
</Parallax>
  );
};
