import React from 'react'
import './Navs.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../assets/imgs/logo.png'
const Navs = () => {
  return (
   <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#home" >
             <img src={logo} alt="" className='img-fluid'  />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" ms-auto ">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About Us</Nav.Link>
                <Nav.Link href="#foods">Explore Foods</Nav.Link>
                <Nav.Link href="#reviews">Reviews</Nav.Link>
               
             </Nav>
               <Nav id='last-nav'>
            <Nav.Link href="#deets" className='last-nav'>12345678</Nav.Link>
             </Nav>
            
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    export default Navs