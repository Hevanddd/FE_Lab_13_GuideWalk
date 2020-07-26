import { connect } from 'react-redux';
import { homeUserDataSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  data: homeUserDataSelector(state),
});
const mapDispatchToProps = {};

export const RouteListContainer = connect(mapStateToProps, mapDispatchToProps);
