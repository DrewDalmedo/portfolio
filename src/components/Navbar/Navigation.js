import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigation = () => {
  return (
    <Container fluid >
      <Navbar >
        <Navbar.Brand href="/">Drew Dalmedo</Navbar.Brand>

        <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about" className="link">About</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/projects" className="link">Projects</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link to="/contact" className="link">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation;