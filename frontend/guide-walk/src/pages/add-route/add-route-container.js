import { connect } from 'react-redux';
import { userInfoDateSelector, userAuthDataSelector } from '../../core/redux/selectors';
import {getAddedRouteDataStart} from '../../core/redux/actions';

const mapStateToProps = (state) => ({ 
    userInfoDate: userInfoDateSelector(state),
    userDataAuth: userAuthDataSelector(state),

 });
const mapDispatchToProps = {
    getAddedRouteDataStart,
};

export const AddRouteContainer = connect(mapStateToProps, mapDispatchToProps);
