import React from 'react'
import Navigation from './components/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PageRenderer from './page-renderer'
import './assets/SCSS/base.scss'

function App() {
  const user= {
    firstName: 'test',
    lastName: 'test2'
  }

  return (
    <Router>
      <div className='App'>
        <Navigation user={user} />
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
