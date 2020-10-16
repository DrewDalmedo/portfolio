import React from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from '../Hero/Hero'
import Description from './Description'

const About = () => {
  return (
    <div>
      <Hero 
        title="About Me" 
        subtitle="I'm a full-stack software engineer from New Jersey."
      />
      <Description>
        <p>
          Hi! I'm Drew, a full-stack software engineer from the mystical land of New Jersey. I have experience with frameworks such as React and Ruby on Rails, as well as languages like Java, JavaScript, and Python. I'm also familiar with operating systems such as Linux and FreeBSD, in addition to Windows and macOS.
        </p>
        <p>
          I'm an active contributor to many open source projects. My most recent personal projects are on display on the <Link to="/">home page</Link>.
        </p>
        <p>
          I believe that each and every one of us has a part to play in solving the great issues of the modern world, and all it takes for us to solve them is for us to be daring enough to venture out and find the solutions we need.
        </p>
        <p>
          Wanna get in touch? <Link to="/contact">Contact me here!</Link>
        </p>
      </Description>
    </div>
  )
}

export default About