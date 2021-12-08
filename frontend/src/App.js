import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Rector from "./pages/Rector";
import Student from "./pages/Student";
import Home from './pages/Home';
import Dashboards from './pages/Dashboards';
import RectorDash from './pages/RectorDash';





import {BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';






function App() {
  return (
    <Router>    
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/student"  component={Student}></Route>
          <Route path="/rector"  component={Rector}></Route>
          <Route path="/Dashboard" component={Dashboards} />
          <Route path="/Dash" component={RectorDash} />

        </Switch>
      </div>
    
    </Router>

   
  );
}

export default App;
