import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { PageWrapper, ProjectWrapper } from '../theme/Basics'

class Project1 extends Component {
    render() {
        return (
            <ProjectWrapper>
            <div className="project-wrapper">
            <h3>Branding | Front-end Development | Animation | Print Design</h3>
            <h2>Generous Giving</h2>
            <p>This is a new paragraph</p>
            <img src={require('../assets/projects/gg/gg-old.png')}/>
            <p>This is a new paragraph</p>
            <video controls src={require('../assets/projects/gg/logo-buildup.mp4')}/>
            </div>
            </ProjectWrapper>
        )
}
}
export default Project1