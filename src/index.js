import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';

render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={ Home } />
      <Route path='/beers' component={ Beers } />
    </App>
  </BrowserRouter>
  , document.getElementById('root')
);
