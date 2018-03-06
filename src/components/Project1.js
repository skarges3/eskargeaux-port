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
            <div className="intro">
            <h3>Branding | Front-end Development | Animation | Print Design</h3>
            <h2>Generous Giving</h2>
            </div>
            <div className="card span-2">
            <p>Generous Giving is a non-profit seeking to inspire people whom have been given much, to live simply and give generously.</p>
            <p>In 2016 I lead their rebrand process to create a clean, modern, and versatile brand.</p>
            </div>

            <div className="card span-2">
            <p>Their old logo.</p>
            <img src={require('../assets/projects/gg/gg-old.png')}/>
            </div>
            <div className="card span-3">
            <p>A progression of my process and a reveal of the final product.</p>
            <video  muted="true" autoplay="true" loop src={require('../assets/projects/gg/logo-buildup.mp4')}/>
            </div>

            <div className="card tran span-1">
            <p>A lot of rough first drafts...</p>
            </div>

            <div className="card span-2">
            <p>The new logo retains a sense of sophostication, since the audience is wealthier than average. But I wanted to feel accesible and unpretentious. </p>
            <img src={require('../assets/projects/gg/gg-new.png')}/>
            </div>

            <div className="card span-2">
            <p>Brand guidelines excerpt: patterns inspired by the logo for use in print and digital material.</p>
            <img src={require('../assets/projects/gg/patterns.png')}/>
            </div>


  

            </div>
            </ProjectWrapper>
        )
}
}
export default Project1