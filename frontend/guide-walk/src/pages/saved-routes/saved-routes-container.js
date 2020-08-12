import { connect } from 'react-redux';
import {
  userSavedRoutesDataSelector,
  userInfoDateSelector,
  userSavedRoadsIdListSelector,
} from '../../core/redux/selectors';
import {
  getUserSavedRoutesDataStart,
  getToggleSavedRouteInSavedRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageStart,
} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userSavedRoutesData: userSavedRoutesDataSelector(state),
  userInfoDate: userInfoDateSelector(state),
  userSavedRoadsIdList: userSavedRoadsIdListSelector(state),
});
const mapDispatchToProps = {
  getUserSavedRoutesDataStart,
  getToggleSavedRouteInSavedRoutesPageStart,
  getToggleRatingRouteInSavedRoutesPageStart,
};

export const SavedRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
