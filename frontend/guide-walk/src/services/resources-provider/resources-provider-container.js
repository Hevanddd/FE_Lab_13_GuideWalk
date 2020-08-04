import { connect } from 'react-redux';
import { refreshUserDataAuth, getUserInfoDataStart } from '../../core/redux/actions';

const mapDispatchToProps = { refreshUserData: refreshUserDataAuth, getHomeUserDataStart: getUserInfoDataStart };

export const ResourcesProviderContainer = connect(null, mapDispatchToProps);
