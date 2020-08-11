import { connect } from 'react-redux';
import {allRoutesSelector} from '../../core/redux/selectors'
import {getAllRoutesStart} from '../../core/redux/actions/get-all-routes-actions'


const mapStateToProps = (state) => ({ allRoutes: allRoutesSelector(state)});
const mapDispatchToProps = {getAllRoutesStart};

export const TopRoutesContainer = connect(mapStateToProps, mapDispatchToProps);