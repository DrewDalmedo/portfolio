import React from 'react'

import Row from 'react-bootstrap/Row'
import ProjectCard from '../Projects/ProjectCard'

const Projects = () => {
  return (
    <Row className="justify-content-center">
      <ProjectCard title="test" quickdesc="test"/>
      <ProjectCard title="test" quickdesc="test"/>
    </Row>
  )
}

export default Projects