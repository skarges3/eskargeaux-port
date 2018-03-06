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

class Contact extends Component {
    render() {
        return (
            <PageWrapper>
            <div class="gridlines"><div></div></div>
            <div class="gridlines2"></div>
            <div class="gridlines3"><div></div></div>
            <div class="gridlines4"></div>
            <div class="darker"></div>
            <div class="darker2"></div>
            <div class="contact">
            <h3>CONTACT:</h3>
            <span>👍🏻</span><br/>
            I am available for freelance projects.  <br/><br/>If you're interested, reach out to me at spencer@ (this domain).
            </div>
            
            </PageWrapper>
        )
}
}
export default Contact