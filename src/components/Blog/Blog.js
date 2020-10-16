import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const blog = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <h1 className="text-center display-1">No blog posts yet! </h1>
        <span className="text-center display-1" role="img" aria-label="sad face">😢</span>
      </Row>
    </Container>
  )
}

export default blog