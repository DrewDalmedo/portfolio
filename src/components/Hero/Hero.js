import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Hero = props => {
  return (
    <Jumbotron className="bg-transparent p-0" fluid>
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col md={10} sm={12}>
            <h1 className="text-center display-1 font-weight-bolder">Drew Dalmedo</h1>
            <h3 className="text-center display-4">Code that matters</h3>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Hero