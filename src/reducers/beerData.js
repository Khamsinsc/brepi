const initState = {
  beers: []
};

const getBeer = (state = initState, action = '') => {
  return action.type === 'BEER_DATA' ?
    { ...state, beers: action.beers } : state;
};

export default getBeer;

