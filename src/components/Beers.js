import React from 'react';
import PaginatorContainer from '../containers/PaginatorContainer';
import BeerContainer from '../containers/BeerContainer';

const Beers = () => {
  return (
    <React.Fragment>
      <BeerContainer />
      <PaginatorContainer />
    </React.Fragment>
  )
}

export default Beers;