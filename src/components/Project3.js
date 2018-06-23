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

class Project3 extends Component {
    render() {
        return (
            <ProjectWrapper>
            <div className="project-wrapper">
            <div className="intro">
            <h3>Packaging Design</h3>
            <h2>Plowshares</h2>
            </div>
            <div className="card span-2">
            <p>A fun project for one of mmy favorite coffee shops in NYC.</p>
            <p>It's a simple coffee bag, but one that proudly highlights where the coffee was grown and the farmer who grew it.</p>
            </div>

            <div className="card span-4">
            <img src={require('../assets/projects/plowshares/Sticker-Option-2.png')}/>
            
            </div>



  

            </div>
            </ProjectWrapper>
        )
}
}
export default Project3