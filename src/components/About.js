import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { PageWrapper } from '../theme/Basics'

class About extends Component {
    render() {
        return (
            <PageWrapper>
            <div>About</div>
            </PageWrapper>
        )
      }
}
export default About