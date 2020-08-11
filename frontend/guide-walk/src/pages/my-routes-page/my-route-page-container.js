import { connect } from 'react-redux';
import {
  userInfoDateSelector,
  userRoutesDataSelector,
  userAuthDataSelector,
  userSavedRoadsIdListSelector,
} from '../../core/redux/selectors';
import { getUserRoutesDataStart, toggleRatingStart, toggleSavedRouteStart } from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userInfoDate: userInfoDateSelector(state),
  userRoutesData: userRoutesDataSelector(state),
  userAuthData: userAuthDataSelector(state),
  userSavedRoadsIdList: userSavedRoadsIdListSelector(state),
});
const mapDispatchToProps = {
  getUserRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
};

export const MyRoutesPageContainer = connect(mapStateToProps, mapDispatchToProps);
