import { connect } from 'react-redux';
import { currentRouteSelector } from '../../core/redux/selectors';
import { currentPointDataSelector, currentRouteMarkersPositionsSelector } from '../../core/redux/selectors';
import {
  getNextPointStart,
  setCurrentRoute,
  setCurrentPoint,
  setCurrentRouteMarkersPositions,
} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
  currentRoute: currentRouteSelector(state),
  currentPointData: currentPointDataSelector(state),
  currentRouteMarkersPositions: currentRouteMarkersPositionsSelector(state),
});
const mapDispatchToProps = { getNextPointStart, setCurrentRoute, setCurrentPoint, setCurrentRouteMarkersPositions };

export const CurrentRouteContainer = connect(mapStateToProps, mapDispatchToProps);
