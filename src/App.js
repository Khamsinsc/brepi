import React from 'react';
import Button from 'antd/lib/button';
import './App.css';
import Header from './components/Header';

const App = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}

export default App;