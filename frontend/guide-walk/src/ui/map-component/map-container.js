import { connect } from 'react-redux';
import { getUserInfoDataStart, getUserInfoDataSuccess } from '../../core/redux/actions';
import { userAuthDataSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  data: userAuthDataSelector(state),
});
const mapDispatchToProps = { getHomeUserDataStart: getUserInfoDataStart, getHomeUserDataSuccess: getUserInfoDataSuccess };

export const MapContainer = connect(mapStateToProps, mapDispatchToProps);
