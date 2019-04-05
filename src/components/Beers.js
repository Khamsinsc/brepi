import React from 'react';
import Header from './Header';
import PaginatorContainer from '../containers/PaginatorContainer';
import BeerContainer from '../containers/BeerContainer';

const Beers = () => {
  return (
    <div className="beersContainer">
      <BeerContainer />
      <PaginatorContainer />
    </div>
  )
}


export default Beers;