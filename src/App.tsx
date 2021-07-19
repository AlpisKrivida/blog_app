import React from 'react'
import Navigation from './components/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PageRenderer from './page-renderer'
import {Login} from './pages/Login/login'
import './assets/SCSS/base.scss'

function App() {

  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route path="/:page" component={PageRenderer} />
          <Route path="/" render={() => <Redirect to="home"/> } />
           <Route component={undefined} /> 
        </Switch>
      </div>
    </Router>
  )
}

export default App
