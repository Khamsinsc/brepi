import { connect } from 'react-redux';
import { gotoPage } from '../actions/actions';
import Paginator from '../components/Paginator';

const mapStateToProps = ({ pageNumber }) => {
  return {
    state: pageNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (event) => {
      dispatch(gotoPage(event));
    }
  }
}

const PaginatorContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Paginator);

export default PaginatorContainer;