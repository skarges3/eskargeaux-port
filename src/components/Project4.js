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

class Project4 extends Component {
    render() {
        return (
            <ProjectWrapper>
            <div className="project-wrapper">
            <div className="intro">
            <h3>Branding</h3>
            <h2>Plan A</h2>
            </div>
            <div className="card span-2">
            <p>Plan A is a wealth management firm in Lincoln, NE.</p>
            <p>They came to me to design their brand and visual strategy. Targeting the right audience for this brand was the main constraint: a younger, midwestern, but wealthy clientel neede to connect and trust the firm.</p>
            </div>

            <div className="card span-4">
            <img src={require('../assets/projects/plana/thumbnails-15.jpg')}/>
            
            </div>



  

            </div>
            </ProjectWrapper>
        )
}
}
export default Project4