import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import HomePage from './pages/Home';
import ClanPage from './pages/Clan';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage}/>
      <Route path="/home" component={HomePage}/>
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/clan" component={ClanPage} />
    
    </BrowserRouter>
  );
}

export default App;