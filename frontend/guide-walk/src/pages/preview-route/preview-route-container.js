import { connect } from 'react-redux';
import { getAllRouteDataStart, setCurrentRoute, removeRouteStart } from '../../core/redux/actions';
import {
  routeDataSelector,
  currentRouteSelector,
  userInfoDateSelector,
  userAuthDataSelector,
} from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  routeData: routeDataSelector(state),
  currentRoute: currentRouteSelector(state),
  userInfoDate: userInfoDateSelector(state),
  userAuthData: userAuthDataSelector(state),
});

const mapDispatchToProps = {
  getAllRouteDataStart,
  setCurrentRoute,
  removeRouteStart,
};

export const PreviewRouteContainer = connect(mapStateToProps, mapDispatchToProps);
