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

const axiosOrders = (input) => {
  if (typeof input !== undefined) {
    return (dispatch) => {
      axios.get(`https://api.punkapi.com/v2/beers/${input}`)
        .then(res => {
          dispatch({
            type: 'ORDER_ID',
            orderContent: res.data[0]
          })
        })
    }
  }
}

const getOrder = (input) => ({
  type: 'ORDER_ID',
  orderId: input
});


export {
  getBeers,
  getOrder,
  axiosOrders
};