import { connect } from 'react-redux';
import { refreshUserData } from '../../core/redux/actions';

const mapDispatchToProps = { refreshUserData };

export const ResourcesProviderContainer = connect(null, mapDispatchToProps);
