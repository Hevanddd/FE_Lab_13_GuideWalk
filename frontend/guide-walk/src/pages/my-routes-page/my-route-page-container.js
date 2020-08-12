import { connect } from 'react-redux';
import {
  userInfoDateSelector,
  userRoutesDataSelector,
  userAuthDataSelector,
  userSavedRoadsIdListSelector,
} from '../../core/redux/selectors';
import {
  getUserRoutesDataStart,
  getToggleSavedRouteInMyRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageStart,
} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userInfoDate: userInfoDateSelector(state),
  userRoutesData: userRoutesDataSelector(state),
  userAuthData: userAuthDataSelector(state),
  userSavedRoadsIdList: userSavedRoadsIdListSelector(state),
});
const mapDispatchToProps = {
  getUserRoutesDataStart,
  getToggleSavedRouteInMyRoutesPageStart,
  getToggleRatingRouteInMyRoutesPageStart,
};

export const MyRoutesPageContainer = connect(mapStateToProps, mapDispatchToProps);
