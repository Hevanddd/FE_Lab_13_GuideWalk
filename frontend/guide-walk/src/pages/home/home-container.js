import { connect } from 'react-redux';
import {
  getUserInfoDataStart,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getCoordinatesStart,
  toggleSavedRouteStart,
  getAllRouteDataStart,
  toggleRatingStart,
  removeRouteStart,
} from '../../core/redux/actions';
import {
  userAuthDataSelector,
  userRoutesSelector,
  userInfoDateSelector,
  allRoutesSelector,
  routeDataSelector,
} from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userDataAuth: userAuthDataSelector(state),
  routes: userRoutesSelector(state),
  userInfoData: userInfoDateSelector(state),
  allRoutes: allRoutesSelector(state),
  routeData: routeDataSelector(state),
});
const mapDispatchToProps = {
  getAddedRouteDataStart,
  getUserInfoDataStart,
  getAllRoutesStart,
  getCoordinatesStart,
  addSavedRouteStart: toggleSavedRouteStart,
  getAllRouteDataStart,
  toggleRatingStart,
  removeRouteStart,
};

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
