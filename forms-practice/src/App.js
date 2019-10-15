
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

import Register from './Components/Register'
import Users from './Components/Users'
import Login from './Components/Login'
import ProtectedRoute from './Components/ProtectedRoute'

function App() {

  const Logout = e => {
    axios
    .get('http://localhost:7000/api/logout')
    .push('/')
  }

  return (
    <div className="App">
      <header>
      <h1>Forms Practice</h1>
      <button onSubmit={Logout}>Logout</button>
      </header>
      <Switch>
      <Route exact path='/' component={Register}/>
      <ProtectedRoute path='/users' component={Users}/>
      <Route path='/login' component={Login}/>
      <Route />
      </Switch>
    </div>
  );
}

export default App;
