import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Description = props => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={8}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default Description