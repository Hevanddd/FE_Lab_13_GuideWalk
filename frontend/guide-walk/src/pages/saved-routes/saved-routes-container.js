import { connect } from 'react-redux';
import {
  userSavedRoutesDataSelector,
  userInfoDateSelector,
  userSavedRoadsIdListSelector,
} from '../../core/redux/selectors';
import { getUserSavedRoutesDataStart, toggleRatingStart, toggleSavedRouteStart } from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userSavedRoutesData: userSavedRoutesDataSelector(state),
  userInfoDate: userInfoDateSelector(state),
  userSavedRoadsIdList: userSavedRoadsIdListSelector(state),
});
const mapDispatchToProps = {
  getUserSavedRoutesDataStart,
  toggleRatingStart,
  toggleSavedRouteStart,
};

export const SavedRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
