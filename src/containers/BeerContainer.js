import { connect } from 'react-redux';
import BeerDisplay from '../components/BeerDisplay';

const mapStateToProps = ({ pageNumber }) => {
  return {
    state: pageNumber
  }
}

const BeerContainer = connect(
  mapStateToProps
)(BeerDisplay);

export default BeerContainer;