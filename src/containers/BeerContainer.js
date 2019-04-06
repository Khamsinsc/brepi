import { connect } from 'react-redux';
import BeerDisplay from '../components/BeerDisplay';
import { axiosOrders, menupage } from '../actions/actions';

const mapStateToProps = (state) => {
  return {
    beers: state.getBeer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (id) => {
      dispatch(axiosOrders(id))
    },
    onMount: (page) => {
      dispatch(menupage(page))
    }
  };
};

const BeerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerDisplay);

export default BeerContainer;