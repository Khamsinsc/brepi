import axios from 'axios';

const getBeers = (input = 1) => {
  return (dispatch) => {
    axios.get(`https://api.punkapi.com/v2/beers?page=${input}&per_page=6`)
      .then(res => {
        dispatch({
          type: 'BEER_DATA',
          beers: res.data
        })
      })
  }
};

const getOrder = (input) => ({
  type: 'ORDER_ID',
  orderId: input
});


export {
  getBeers,
  getOrder
};