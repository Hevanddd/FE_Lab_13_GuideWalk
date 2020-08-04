import { connect } from 'react-redux';
import { userAuthDataSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  data: userAuthDataSelector(state),
});
const mapDispatchToProps = {};

export const RouteListContainer = connect(mapStateToProps, mapDispatchToProps);
