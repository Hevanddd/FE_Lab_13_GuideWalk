import { connect } from 'react-redux';
import { currentRouteSelector } from '../../core/redux/selectors';
import { currentPointDataSelector } from '../../core/redux/selectors';
import {getNextPointStart, setCurrentRoute, setCurrentPoint} from '../../core/redux/actions';

const mapStateToProps = (state) => ({
    currentRoute: currentRouteSelector(state),
    currentPointData: currentPointDataSelector(state)
});
const mapDispatchToProps = {getNextPointStart, setCurrentRoute, setCurrentPoint};

export const CurrentRouteContainer = connect(mapStateToProps, mapDispatchToProps);
