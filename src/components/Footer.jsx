import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import {
    MDBFooter,
    MDBContainer,
    MDBBtn
  } from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <MDBFooter className='text-center footer'>
      <MDBContainer className='p-3'>
        <section className='mb-3'>
          <MDBBtn outline floating className='m-3 social' href='#!' role='button'>
            <FaFacebook size={25}/>
          </MDBBtn>
          <MDBBtn outline floating className='m-3 social' href='#!' role='button'>
            <FaTwitter size={25}/>
          </MDBBtn>
          <MDBBtn outline floating className='m-3 social' href='#!' role='button'>
            <FaInstagram size={25}/>
          </MDBBtn>
        </section>
    </MDBContainer>
  </MDBFooter>
);
}