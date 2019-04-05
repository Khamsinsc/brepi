const initState = {
  ids: []
};

const orderId = (state = initState, action = '') => {
  if (action.type === 'ORDER_ID') {
    return {
      ids: state.ids.push(action.orderId)
    }
  } else { return state };
};

export default orderId;

