import { connect } from 'react-redux';
import {
  allRoutesSelector,
  userInfoDateSelector,
  userSavedRoadsIdListSelector,
  searchDataSelector,
} from '../../core/redux/selectors';
import {
  getAllRoutesStart,
  getNextRoutesStart,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  allRoutes: allRoutesSelector(state),
  userInfoDate: userInfoDateSelector(state),
  userSavedRoadsIdList: userSavedRoadsIdListSelector(state),
  searchData: searchDataSelector(state),
});
const mapDispatchToProps = {
  getAllRoutesStart,
  getNextRoutesStart,
  getToggleSavedRouteInTopRoutesPageStart,
  getToggleRatingRouteInTopRoutesPageStart,
};

export const TopRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
