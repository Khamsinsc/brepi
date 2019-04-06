import { connect } from 'react-redux';
import Header from '../components/Header';
import { menupage } from '../actions/actions';

const mapStateToProps = ({ menuReducer }) => {
  return {
    selected: menuReducer.selectedKeys
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelect: (selected) => {
      dispatch(menupage(selected))
    }
  };
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;