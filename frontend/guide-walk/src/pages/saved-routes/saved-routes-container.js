import { connect } from 'react-redux';
import { userSavedRoutesDataSelector, userRoutesDataSelector, userInfoDateSelector } from '../../core/redux/selectors';
import { getUserSavedRoutesDataStart, getUserRoutesDataStart, toggleRatingStart } from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  userSavedRoutes: userSavedRoutesDataSelector(state),
  userRoutesData: userRoutesDataSelector(state),
  userInfoDate: userInfoDateSelector(state),
});
const mapDispatchToProps = { getUserSavedRoutesDataStart, getUserRoutesDataStart, toggleRatingStart };

export const SavedRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
