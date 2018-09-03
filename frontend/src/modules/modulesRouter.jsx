import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AllModules from './allModules';

class ModulesRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' component={AllModules} />
      </Switch>
    )
  }
}

export default ModulesRouter;
