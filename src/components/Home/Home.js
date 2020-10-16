import React from 'react'

import Container from 'react-bootstrap/Container'
/*
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
*/

import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'

const Home = () => {
  return (
    <Container className="p-0" fluid>
      <Hero title="Drew Dalmedo" subtitle="Code that matters."/>
      <Projects />
    </Container>
  )
}

export default Home