import React from 'react';
import placeholderimg from '../../assets/placeholder.svg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const ProjectCard = props => {
  return (
      <Card className="justify-content-center"style={{}}>
        <Card.Img variant="top" src={placeholderimg} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-center">
            {props.title}
          </Card.Title>
          <Card.Text className="d-flex justify-content-center">
            {props.quickdesc}
          </Card.Text>
          <Button block>Learn More</Button>
        </Card.Body>
      </Card>
  )
}

export default ProjectCard