import { connect } from 'react-redux';
import { userInfoDateSelector, userAuthDataSelector, routeDataSelector } from '../../core/redux/selectors';
import { getAddedRouteDataStart, getAllRouteDataStart } from '../../core/redux/actions';

const mapStateToProps = (state) => ({
    routeData: routeDataSelector(state),
    userInfoDate: userInfoDateSelector(state),
    userDataAuth: userAuthDataSelector(state),
});
const mapDispatchToProps = {
    getAddedRouteDataStart,
    getAllRouteDataStart
};

export const EditRouteContainer = connect(mapStateToProps, mapDispatchToProps);
