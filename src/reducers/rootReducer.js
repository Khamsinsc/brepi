import { combineReducers } from 'redux';
import pageNumber from './pageNumber';
import orderId from './orderId';
import getBeer from './beerData';

const rootReducer = combineReducers({
  pageNumber,
  orderId,
  getBeer
});

export default rootReducer;
