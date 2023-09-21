import React from 'react'
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Container className="text-center pt-5">
      <h1 className='mb-3'>Welcome to <span className="fw-bolder">Rockie Doggie!</span></h1>
      <p className='mb-2'>The place to rock your cake!!!</p>
      <Footer/>
    </Container>
  )
}
