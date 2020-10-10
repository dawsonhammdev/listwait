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


class App extends React.Component {

  render() {
    return (
      <>
      <Router>
        <Switch>
          <Route path="/account-create">
            < Create />
          </Route>
          <Route path="/dashboard">
            < Dashboard />
          </Route>
        </Switch>
      </Router>
      </>
    );
    
  }
  
}
export default App;
