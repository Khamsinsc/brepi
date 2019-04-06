const initState = {
  selectedKeys: []
};

const menuReducer = (state = initState, action = '') => {
  if (action.type === 'MENU_PAGE') {
    return { selectedKeys: action.selectedKeys }
  } else { return state };
};

export default menuReducer;

