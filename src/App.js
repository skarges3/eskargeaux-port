import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Work from './components/Work'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Project4 from './components/Project4'
import { PageWrapper, Logo } from './theme/Basics'

const NavLink = ({children, to, exact}) => {
  
  return(
    <Route path={to} children={({match}) => (
      <div className={match ? 'active' : ''}>
      {match ? '' : ''}
      <Link to={to}>
        {children}
      </Link>
  
      </div>
    )}/>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Route render={({ location }) => (
          <div style={styles.fill}>
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>
            )}/>
            <Logo><Link exact to="/home" ><img className="second" src={require('./assets/logo.svg')}/><img className="first" src={require('./assets/logo.svg')}/></Link></Logo>
            <ul className="sidenav" style={styles.nav}>
              <NavLink exact to="/home">Home</NavLink>
              <NavLink exact to="/work">Work</NavLink>
  
              <NavLink exact to="/contact">Contact</NavLink>
              
            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={1000}
                ><div>
                  <Switch location={location}>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/work/generousgiving" component={Project1} />
                    <Route exact path="/work/jog" component={Project2} />
                    <Route exact path="/work/plowshares" component={Project3} />
                    <Route exact path="/work/plana" component={Project4} />
                    {/* <Route render={() => <div>Not Found</div>} /> */}
                  </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}/>
      </Router>
    )
  }
}

const styles = {}

styles.fill = {
  display: 'grid',
  gridTemplateColumns: '16vw 1fr 6vh',
  height: '100vh'
}

styles.content = {
  gridArea: '1 / 1 / 2 / 3',
  height: '100vh',
  background: '#efd9ce'
}

styles.nav = {
  padding: 0,
  margin: 0,
  gridArea: '1 / 3 / -1 / -1',
  top: 0,
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'transparent'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

export default App