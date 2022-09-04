import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar,Nav, Container} from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div>
   <Navbar bg='dark' expand='lg' variant='dark'>
    <Container>
      <Navbar.Brand href='/places'>Jamar Bevel Places</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Item>
          <Nav.Link href='/places'>places</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link href='/contact'>contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Container>
   </Navbar>
    <Outlet/>
   </div>
  );
}

export default App;
