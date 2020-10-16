import React from 'react';
import placeholderimg from '../../assets/placeholder.svg';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const ProjectCard = props => {
  return (
      <Card className="justify-content-center"style={{ width: '18rem' }}>
        <Card.Img variant="top" src={placeholderimg} />
        <Card.Body>
          <Card.Title className="text-center">
            {props.title}
          </Card.Title>
          <Card.Text className="text-center">
            {props.quickdesc}
          </Card.Text>
          <Container>
            <div className="text-center">
              <Button 
                href={props.codelink} 
                target="_blank"
              >
                  View Code
              </Button>
              <Button 
                href={props.videolink} 
                target="_blank"
              >
                View Demo
              </Button>
            </div>
          </Container>
        </Card.Body>
      </Card>
  )
}

export default ProjectCard