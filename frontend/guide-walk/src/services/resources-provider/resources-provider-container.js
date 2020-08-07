import { connect } from 'react-redux';
import { refreshUserDataAuth, getUserInfoDataStart } from '../../core/redux/actions';

const mapDispatchToProps = { refreshUserDataAuth, getUserInfoDataStart };

export const ResourcesProviderContainer = connect(null, mapDispatchToProps);
