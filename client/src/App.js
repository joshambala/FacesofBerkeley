import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./pages/User";
import logo from './logo.svg';
import Signin from './components/Signin';
import SignUpForm from './components/SignUpForm';
import Weather from './components/Weather';
import Calendar from './components/Calendar';
import ToDoList from './components/ToDoList';
import NavLinks from './components/NavLinks';
import Profile from './components/Profile';
import './App.css';

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/signup" component={SignUpForm} />
        <Route exact path="/user" component={User} />
        <Route exact path="/weather" component={Weather} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path='/todolist' component={ToDoList} />
        <Route exact path="/navlinks" component={NavLinks} />
        <Route exact path="/profile" component={Profile} />

      </Switch>
    </div>
  </Router>;

export default App;
