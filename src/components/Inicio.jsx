import React from 'react'
import './Inicio.css'
import { Button, Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'


export const Inicio = () => {
  return (
    <>
      <Parallax bgImage={'./fondo-inicio.png'} strength={70}>
        <div className="inicio" id='inicio'>
            <Container>
                <div className='row col-md-6  justify-content-center'>
                    <h2 className='display-2'>Agrupación<br/>Purificación</h2>
                    <span className='h3 pb-3'>Elsa Capillera</span>
                    <p className='h5 py-3'><em>"Nuestras acciones demuestran nuestro compromiso."</em></p>
                </div> 
                <div className="col-3">
                <Button href='https://parlamento.gub.uy/camarasycomisiones/legisladores/12662/iniciativas-legislador?Fechadesde=2020-02-15&Fechahasta=2025-02-14' target="_blank" className='py-2' variant="outline-danger" size="lg" type="submit">
                  Proyectos Presentados
                </Button> 
                </div>          
            </Container>
        </div> 
      </Parallax>
    </>
  )
}
