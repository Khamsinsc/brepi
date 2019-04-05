const initState = {
  count: 1
};

const pageNumber = (state = initState, action = '') => {
  if (action.type === 'PAGE_NUM') {
    return { pageCount: action.pageCount }
  } else { return state };
};

export default pageNumber;

