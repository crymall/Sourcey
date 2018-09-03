import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MyProvider from './MyProvider';
import Home from './Home';
import Register from './Register';
import ModulesRouter from './modules/modulesRouter';
import HomeNavbar from './HomeNavbar'

class App extends Component {
  render() {
    return (
      <MyProvider>
        <HomeNavbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route path='/modules' component={ModulesRouter} />
        </Switch>
      </MyProvider>
    )
  }
}

export default App;
