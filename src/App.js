import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/EmployeeList" component={EmployeeList} />
    </Router>
  );
}

export default App;
