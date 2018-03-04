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
            <div class="gridlines"><div></div></div>
            <div class="gridlines2"></div>
            <div class="gridlines3"><div></div></div>
            <div class="gridlines4"></div>
            <div class="clients">
            <h3>SELECTED CLIENTS:</h3>
            <ul>
            <li>Plowshares Coffee</li>
            <li>Generosity Path</li>
            <li>Kickstand Bicycles</li>
            <li>Generous Giving</li>
            <li>Plan A Wealth Management</li>
            <li>+ more</li>
            </ul>
            </div>
            </PageWrapper>
        )
      }
}
export default About