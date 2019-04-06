import { connect } from 'react-redux';
import BeerDisplay from '../components/BeerDisplay';

const mapStateToProps = (state) => {
  return {
    beers: state.getBeer
  }
}

const BeerContainer = connect(
  mapStateToProps
)(BeerDisplay);

export default BeerContainer;