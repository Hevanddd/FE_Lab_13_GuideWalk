import { connect } from 'react-redux';
import { getUserInfoDataStart, getAddedRouteDataStart } from '../../core/redux/actions';
import { userAuthDataSelector, userRoutesSelector, userInfoDateSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userDataAuth: userAuthDataSelector(state),
  routes: userRoutesSelector(state),
  userInfoData: userInfoDateSelector(state),
});
const mapDispatchToProps = { getAddedRouteDataStart, getUserInfoDataStart };

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
