import { connect } from 'react-redux';
import { getHomeUserDataStart, getHomeUserDataSuccess } from '../../core/redux/actions';
import { homeUserDataSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  data: homeUserDataSelector(state),
});
const mapDispatchToProps = { getHomeUserDataStart, getHomeUserDataSuccess };

export const MapAddEditPointContainer = connect(mapStateToProps, mapDispatchToProps);
