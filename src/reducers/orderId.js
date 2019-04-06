const initState = {
  orderContent: []
};

const orderId = (state = initState, action = '') => {
  if (action.type === 'ORDER_ID') {
    let currentState = state.orderContent;
    currentState.push(action.orderContent);
    return {
      ...state,
      orderContent: currentState
    }
  } else { return state }
};

export default orderId;

