import { connect } from 'react-redux';
import { userSavedRoutesDataSelector, userRoutesDataSelector, userInfoDateSelector } from '../../core/redux/selectors';
import {
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userSavedRoutesData: userSavedRoutesDataSelector(state),
  userRoutesData: userRoutesDataSelector(state),
  userInfoDate: userInfoDateSelector(state),
});
const mapDispatchToProps = {
  getUserSavedRoutesDataStart,
  getUserRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
};

export const SavedRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
