import { connect } from 'react-redux';
import { userSavedRoutesSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  userSavedRoutes: userSavedRoutesSelector(state),
});
const mapDispatchToProps = {};

export const SavedRoutesContainer = connect(mapStateToProps, mapDispatchToProps);
