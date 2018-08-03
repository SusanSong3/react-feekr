import React, { Component } from 'react';
import './style/usage/core/reset.scss';
import { Ui as Home } from './pages/home'
import { Ui as Detail } from './pages/detail'
import { Ui as Signin } from './pages/signin'
import { Ui as Signup } from './pages/signup'
import { Ui as StrategyList } from './pages/strategyList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path='/home' component={Home}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/strategyList' component={StrategyList}/>
          <Route path='/detail:id' component={Detail}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
