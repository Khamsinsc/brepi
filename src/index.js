import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import OrdersContainer from './containers/OrdersContainer';
import { Provider } from 'react-redux';
import store from './store';

render(
  <BrowserRouter>
    <Provider store={ store }>
      <App>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/beers' component={ Beers } />
          <Route path='/orders' component={ OrdersContainer } />
          <Route component={ Home } />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>
  , document.getElementById('root')
);
