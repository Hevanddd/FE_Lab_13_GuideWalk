import { connect } from 'react-redux';
import { getAllRouteDataStart, setCurrentRoute, removeRouteStart } from '../../core/redux/actions';
import { routeDataSelector, currentRouteSelector, userInfoDateSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({ 
    routeData: routeDataSelector(state),
    currentRoute: currentRouteSelector(state),
    userInfoDate: userInfoDateSelector(state),
});

const mapDispatchToProps = {
    getAllRouteDataStart,
    setCurrentRoute,
    removeRouteStart
};

export const PreviewRouteContainer = connect(mapStateToProps, mapDispatchToProps);
