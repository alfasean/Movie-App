import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../Assets/logo.png';
import './../App.css';

function BasicExample({ onSearch }) {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    onSearch(query);
  };

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
            <form className="form">
              <button>
                <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"
                  aria-labelledby="search">
                  <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                    stroke="currentColor" strokeWidth="1.333" strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </svg>
              </button>
              <input className="input" placeholder="Search Any Movie..." onChange={handleSearch} required="" type="text" />
              <button className="reset" type="reset">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </form>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
