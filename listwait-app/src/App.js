import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import Create from './components/Create';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';


class App extends React.Component {

  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/account-create">
            < Create />
          </Route>
          <PrivateRoute path="/dashboard">
            < Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
      </>
    );
    
  }
  
}
export default App;
