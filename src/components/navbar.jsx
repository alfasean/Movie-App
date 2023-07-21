import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../Assets/logo.png';
import './../App.css';

function BasicExample({ onSearch }) {
  const navigate = useNavigate();
  
  const handleHomeClick = () => {
    navigate('/'); 
  };

  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: '#03001C', boxShadow: '0 8px 4px rgba(0, 0, 0, 0.2)' }}>
      <Container>
        <Navbar.Brand onClick={handleHomeClick}>
          <a href="/">
          <img src={logo} alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Navbar.Text>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
