import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
    MDBFooter,
    MDBContainer
  } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='text-center footer'>
      <MDBContainer className='p-3'>
        <section className='social-ntwk mb-3'>
        <button
  className='m-3 social'
  onClick={() => window.open('https://www.facebook.com/groups/1098003370384782/?locale=es_LA', '_blank')}
>
  <FaFacebook size={25} />
</button>

<button
  className='m-3 social'
  onClick={() => window.open('https://twitter.com/Purificacion_CA', '_blank')}
>
  <FaTwitter size={25} />
</button>

<button
  className='m-3 social'
  onClick={() => window.open('https://www.instagram.com/agrupacionpurificacion/', '_blank')}
>
  <FaInstagram size={25} />
</button>

        </section>
    </MDBContainer>
  </MDBFooter>
);
}