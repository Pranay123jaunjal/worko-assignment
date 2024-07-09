import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Login from './components/Login';
import CandidateHome from './components/CandidateHome';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/login" component={Login} />
        <Route path="/candidate/home" component={CandidateHome} />
      </Switch>
    </Router>
  );
}

export default App;
