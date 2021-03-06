import { connect } from 'react-redux';
import { isLoadingSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
});
const mapDispatchToProps = {};

export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps);
