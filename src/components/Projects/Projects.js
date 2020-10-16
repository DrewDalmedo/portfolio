import React from 'react'

import Row from 'react-bootstrap/Row'
import ProjectCard from '../Projects/ProjectCard'

const Projects = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <p className="font-weight-light" style={{fontSize: "24px"}}>My latest projects:</p>
      </Row>
      <Row className="justify-content-center">
        <ProjectCard 
          title="Flatiron Jobs V2" 
          quickdesc="A job finding web app, built with React and Rails." 
          codelink="https://github.com/DrewDalmedo/flatiron-jobs-v2" 
          videolink="https://youtu.be/vCfOmSKjWk0"
        />
        <ProjectCard 
          title="VGC" 
          quickdesc="An organizational web app for video game collections."
          codelink="https://github.com/DrewDalmedo/VGC"
          videolink="https://youtu.be/9L8we0b4iHs"
        />
      </Row>
    </div>
  )
}

export default Projects