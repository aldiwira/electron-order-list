import React, { useEffect, useReducer } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Context, initialState, reducer } from './store';
import { routes } from './config';

const renderRoutes = () => {
  return routes.map((val) => {
    return (
      <Route exact key={val.name} path={val.path} component={val.component} />
    );
  });
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Router>
        <Switch>{renderRoutes()}</Switch>
      </Router>
    </Context.Provider>
  );
};

export default App;
