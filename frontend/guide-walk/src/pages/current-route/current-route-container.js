import { connect } from 'react-redux';
import { currentRouteSelector } from '../../core/redux/selectors';
import { currentPointIndexSelector, currentPointDataSelector } from '../../core/redux/selectors/routes-selectors';
import {getNextPointStart, setCurrentRoute} from '../../core/redux/actions/current-route-actions';

const mapStateToProps = (state) => ({
    currentRoute: currentRouteSelector(state),
    currentPointIndex: currentPointIndexSelector(state),
    currentPointData: currentPointDataSelector(state)
});
const mapDispatchToProps = {getNextPointStart, setCurrentRoute};

export const CurrentRouteContainer = connect(mapStateToProps, mapDispatchToProps);
