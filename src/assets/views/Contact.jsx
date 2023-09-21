import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'; 
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <Container className="text-center pt-5">
      <h1>So you are looking to have some rock on your B-Day Party? 🤘 Please tell us what you need in the form below! 🐶
      </h1>
      <Form>
        <Form.Group className="mb-3 input-large" controlId="exampleForm.ControlInput1">
          <Form.Label>Mail: </Form.Label>
          <Form.Control type="email" className="input-large" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description:</Form.Label>
          <Form.Control className="input-large" as="textarea" rows={3} placeholder="Please tell us what you need, Feel free to ask anything!"/>
        </Form.Group>
        <Button variant="danger" type="submit" onClick={() => alert('Form Sent')}>
          Send
        </Button>
      </Form>
      <Footer/>
    </Container>
  );
}
