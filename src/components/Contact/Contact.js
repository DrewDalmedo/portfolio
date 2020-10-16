import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'

import Hero from '../Hero/Hero'

import twitter from '../../assets/twitter.png'
import email from '../../assets/gmail.png'

const Contact = () => {
  return (
    <Container className="p-0" fluid>
      <Hero title="Let's talk!"/>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <a href="https://twitter.com/DrewDalmedo" target="_blank">
            <Image src={twitter} thumbnail style={{border: 'none', height: "128px"}} />
          </a>
          <p className="display-4">@DrewDalmedo</p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col className="text-center">
          <Image src={email} thumbnail style={{border: 'none', height: '128px'}}/>
          <p className="display-4">drew@drewdalmedo.com</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact