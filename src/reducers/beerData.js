const initState = {
  beers: []
};

const getBeer = (state = initState, action = '') => {

  if (action.type === 'BEER_DATA') {
    return {
      ...state,
      beers: action.beers
    }
  } else { return state };
};

export default getBeer;

