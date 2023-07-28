import React from 'react'
import './Elsa.css'
import { Container } from 'react-bootstrap'

export const Elsa = () => {
  return (
    <>
      <div className="elsa" id='elsa'>
        <Container className='row elsa2 col-md-12'>
          <div className="col-md-6 p-5">
            <img src="./elsa.jpg" className='img-fluid'/>
          </div>
          <div className="col-md-6 p-5">
            <h2 className="display-5">Elsa Capillera:</h2>
            <p className='py-3 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi officiis unde saepe minima, dolorem, vero ducimus nam, sequi eveniet quas est delectus facere debitis itaque beatae ullam repudiandae consectetur iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam illo eveniet, eligendi alias ad fuga autem! Laboriosam distinctio blanditiis minima porro excepturi ut, alias officia. Repellat perspiciatis nihil ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam iusto quos quo provident iure ut! Pariatur eius sed assumenda, voluptatum facilis asperiores a quisquam illum, quae, iste nam quam.</p>
          </div>
          <div className="col-md-6 p-5">
            <p className='py-3 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi officiis unde saepe minima, dolorem, vero ducimus nam, sequi eveniet quas est delectus facere debitis itaque beatae ullam repudiandae consectetur iusto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam illo eveniet, eligendi alias ad fuga autem! Laboriosam distinctio blanditiis minima porro excepturi ut, alias officia. Repellat perspiciatis nihil ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, totam iusto quos quo provident iure ut! Pariatur eius sed assumenda, voluptatum facilis asperiores a quisquam illum, quae, iste nam quam.</p>
          </div>
          <div className="col-md-6 p-5">
            <img src="./elsa2.jpeg" className='img-fluid'/>
          </div>
        </Container>
      </div>
    </>
  )
}
