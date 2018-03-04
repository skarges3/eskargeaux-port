import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { PageWrapper, H1, Categories, Portfolio, HomeWrapper } from '../theme/Basics'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
            <div class="gridlines"><div></div></div>
            <div class="gridlines2"></div>
            <div class="gridlines3"><div></div></div>
            <div class="gridlines4"></div>    
            <div className="block"></div>
            <Portfolio>The portfolio of</Portfolio>
            <Categories>
            <br/>
            <span>Brand</span>
            <span>Web</span>
            <span>Graphic</span>
            <span>UX</span>
            </Categories> 

            <H1>Spencer Karges,<br/><span>Designer</span></H1>
            
            <Link className="worklink" exact to="/work"><span>see work</span></Link>
            
            </HomeWrapper>
        )
}
}
export default Home