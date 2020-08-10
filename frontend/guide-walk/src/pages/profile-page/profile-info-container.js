import { connect } from 'react-redux';
import {userAuthDataSelector} from '../../core/redux/selectors'

const mapStateToProps = (state) => ({userAuthData: userAuthDataSelector(state)});
const mapDispatchToProps = {};

export const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps);