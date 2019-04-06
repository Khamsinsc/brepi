import { combineReducers } from 'redux';
import orderId from './orderId';
import getBeer from './beerData';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
  orderId,
  getBeer,
  menuReducer
});

export default rootReducer;
