const initState = {
  beers: []
};

const getBeer = (state = initState, action = '') => {
  console.log(action);

  if (action.type === 'BEER_DATA') {
    return {
      beers: action.beers
    }
  } else { return state };
};

export default getBeer;

