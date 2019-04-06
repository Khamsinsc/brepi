import { connect } from 'react-redux';
import Orders from '../components/Orders';

const mapStateToProps = (state) => {
  return {
    orders: state.orderId.orderContent
  }
}


const OrdersContainer = connect(
  mapStateToProps
)(Orders);

export default OrdersContainer;