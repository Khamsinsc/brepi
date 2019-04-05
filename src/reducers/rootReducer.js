import { combineReducers } from 'redux';
import pageNumber from './pageNumber';
import orderId from './orderId';

const rootReducer = combineReducers({
  pageNumber,
  orderId
});

export default rootReducer;
