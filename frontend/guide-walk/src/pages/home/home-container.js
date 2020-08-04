import { connect } from 'react-redux';
import { getUserInfoDataStart, getAddedRouteDataStart, getAllRoutesStart } from '../../core/redux/actions';
import { userAuthDataSelector, userRoutesSelector, userInfoDateSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userDataAuth: userAuthDataSelector(state),
  routes: userRoutesSelector(state),
  userInfoData: userInfoDateSelector(state),
});
const mapDispatchToProps = { getAddedRouteDataStart, getUserInfoDataStart, getAllRoutesStart };

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
