import { connect } from 'react-redux';
import { getBeers } from '../actions/actions';
import Paginator from '../components/Paginator';

const mapStateToProps = ({ pageNumber }) => {
  return {
    pageNumber: pageNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      dispatch(getBeers(event));
    }
  }
}

const PaginatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);

export default PaginatorContainer;