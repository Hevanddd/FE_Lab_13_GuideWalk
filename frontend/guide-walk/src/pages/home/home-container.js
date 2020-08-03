import { connect } from 'react-redux';
import { getHomeUserDataStart } from '../../core/redux/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = { getHomeUserDataStart };

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
