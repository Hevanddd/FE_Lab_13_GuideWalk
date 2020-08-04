import { connect } from 'react-redux';
import { getHomeUserDataStart } from '../../core/redux/actions';
import { homeUserDataSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userData: homeUserDataSelector(state),
});
const mapDispatchToProps = { getHomeUserDataStart };

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps);
