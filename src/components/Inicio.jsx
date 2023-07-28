import React from 'react'
import './Inicio.css'
import { Button, Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'


export const Inicio = () => {
  return (
    <>
      <Parallax bgImage={'./fondo.jpg'} strength={100}>
        <div className="inicio" id='inicio'>
            <Container>
                <div className='row col-md-6  justify-content-center'>
                    <h2 className='display-2'>Agrupación<br/>Purificación</h2>
                    <span className='lead pb-3'>Cabildo Abierto</span>
                    <p className='small py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eos voluptatum soluta magnam, officia sed, fuga, odit eveniet molestiae at cupiditate dolor illo sint nostrum? Rem accusamus porro possimus hic?</p>
                </div>  
                <Button href='https://google.com' target="_blank" className='col-3 py-2' variant="outline-danger" size="lg" type="submit">
                  Proyectos Presentados
                </Button>          
            </Container>
        </div> 
      </Parallax>
    </>
  )
}
