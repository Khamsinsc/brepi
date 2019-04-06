import { connect } from 'react-redux';
import Orders from '../components/Orders';
import { menupage } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    orders: state.orderId.orderContent
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (page) => {
      dispatch(menupage(page));
    }
  };
};

const OrdersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);

export default OrdersContainer;