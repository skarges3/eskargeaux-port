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

class Project2 extends Component {
    render() {
        return (
            <ProjectWrapper>
            <div className="project-wrapper">
            <div className="intro">
            <h3>Front-End Development | Salesforce Event Integration</h3>
            <h2>Journey of Generosity Invitation System</h2>
            </div>
            <div className="card span-2">
            <p>Generous Giving uses Salesforce to integrate their CRM, website, and event registrations.</p>
            <p>I redesigned the front-end of the site and helped implement an invitation system with user input and animated evites.</p>
            </div>

            <div className="card span-2">
            <p><a className="projectlink" href="https://generousgiving.org/host/jog?eventid=a06A000001CvQUc" target="blank"><img src={require('../assets/projects/gg/invite3.png')} alt="View an example user interface for entering invite details."/></a></p>
            </div>

            <div className="card span-4">
            <h3>Home page design.</h3><br/>
            <a className="projectlink" href="https://generousgiving.org" target="blank"><img src={require('../assets/projects/gg/thumbnails-18.jpg')}/></a>
            </div>
  

            </div>
            </ProjectWrapper>
        )
}
}
export default Project2