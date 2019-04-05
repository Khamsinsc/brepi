import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

render(
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
    </App>
  </BrowserRouter>
  , document.getElementById('root')
);
