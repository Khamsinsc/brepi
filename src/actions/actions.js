const gotoPage = (input) => ({
  type: 'PAGE_NUM',
  pageNum: input
});

const getOrder = (input) => ({
  type: 'ORDER_ID',
  orderId: input
});

export {
  gotoPage,
  getOrder
};