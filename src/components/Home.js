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

class Home extends Component {
    render() {
        return (
            <PageWrapper>
            <div>Home</div>
            </PageWrapper>
        )
}
}
export default Home