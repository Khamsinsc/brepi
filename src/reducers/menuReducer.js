const initState = {
  selectedKeys: []
};

const menuReducer = (state = initState, action = '') => {
  return (action.type === 'MENU_PAGE') ?
    { selectedKeys: action.selectedKeys } : state
};

export default menuReducer;

