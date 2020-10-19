import React from 'react'

import Row from 'react-bootstrap/Row'
import ProjectCard from '../Projects/ProjectCard'

import fjv2 from '../../assets/fjv2.png'
import vgc from '../../assets/vgc.png'

const Projects = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <p className="font-weight-light" style={{fontSize: "24px"}}>My latest projects:</p>
      </Row>
      <Row className="justify-content-center">
        <ProjectCard 
          image={fjv2}
          title="Flatiron Jobs V2" 
          quickdesc="A job finding web app, built with React and Rails." 
          codelink="https://github.com/DrewDalmedo/flatiron-jobs-v2" 
          videolink="https://youtu.be/vCfOmSKjWk0"
        />
        <ProjectCard 
          image={vgc}
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