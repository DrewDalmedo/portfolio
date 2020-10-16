import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const Navigation = () => {
  return (
    <Container className="p-0" fluid >
      <Navbar className="border-bottom" bg="transparent">
        <Navbar.Brand href="/">Drew Dalmedo</Navbar.Brand>

        <Nav>
          <Nav.Item>
            <Nav.Link>
              <Link className="nav-link" to="/about" >About</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link className="nav-link" to="/blog" >Blog</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <Link className="nav-link" to="/contact" >Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </Container>
  )
}

export default Navigation;