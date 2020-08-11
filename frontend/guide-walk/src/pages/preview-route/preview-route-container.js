import { connect } from 'react-redux';
import {getAllRouteDataStart, setCurrentRoute} from '../../core/redux/actions';
import { routeDataSelector, currentRouteSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({ 
    routeData: routeDataSelector(state),
    currentRoute: currentRouteSelector(state)
});

const mapDispatchToProps = {
    getAllRouteDataStart,
    setCurrentRoute
};

export const PreviewRouteContainer = connect(mapStateToProps, mapDispatchToProps);
