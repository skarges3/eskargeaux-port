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

const NavLink = ({children, to, exact}) => {
  
  return(
    <Route path={to} exact={exact} children={({match}) => (
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
              <Redirect to="/Home"/>
            )}/>

            <ul className="sidenav" style={styles.nav}>
              <NavLink exact to="/Home">Home</NavLink>
              <NavLink exact to="/Work">Topics</NavLink>
              <NavLink exact to="/About">About</NavLink>
              <NavLink exact to="/Contact">Contact</NavLink>
            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Work" component={Work} />
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    {/* <Route render={() => <div>Not Found</div>} /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}/>
      </Router>
    )
  }
}

// const NavLink = (props) => (
//   <li style={styles.navItem}>
//     <Link {...props} style={{ color: 'inherit' }}/>
//   </li>
// )

const HSL = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
  )
}

const RGB = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}>rgb({params.r}, {params.g}, {params.b})</div>
  )
}

const styles = {}

styles.fill = {
  display: 'grid',
  gridTemplateColumns: '1fr 6vh',
  height: '100vh'
}

styles.content = {
  gridArea: '1 / 1 / 2 / 2',
  height: '100vh'
}

styles.nav = {
  padding: 0,
  margin: 0,
  gridArea: '1 / 2 / -1 / -1',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  color: 'white',
}

styles.rgb  = {
  color: 'white',
}

export default App