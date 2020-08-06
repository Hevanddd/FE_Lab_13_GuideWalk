import { connect } from 'react-redux';
import {
  getUserInfoDataStart,
  getAddedRouteDataStart,
  getAllRoutesStart,
  getCoordinatesStart,
} from '../../core/redux/actions';
import {
  userAuthDataSelector,
  userRoutesSelector,
  userInfoDateSelector,
  allRoutesSelector,
} from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userDataAuth: userAuthDataSelector(state),
  routes: userRoutesSelector(state),
  userInfoData: userInfoDateSelector(state),
  allRoutes: allRoutesSelector(state),
});
const mapDispatchToProps = { getAddedRouteDataStart, getUserInfoDataStart, getAllRoutesStart, getCoordinatesStart };

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
