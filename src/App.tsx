import * as React from 'react'
import './App.css'

import { Switch, Link, HashRouter as Router, Route } from 'react-router-dom'

import Counter from './features/home'
import User from './features/user'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/">计数器</Link>
          </li>
          <li>
            <Link to="/user">用户</Link>
          </li>
        </ul>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route path="/" component={Counter} exact></Route>
            <Route path="/user" component={User}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
