import React from 'react';
import './App.css';
import HeaderContainer from './containers/HeaderContainer';

const App = (props) => {
  return (
    <div>
      <HeaderContainer />
      { props.children }
    </div>
  )
}

export default App;