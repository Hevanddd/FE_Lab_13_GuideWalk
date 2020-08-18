import { connect } from 'react-redux';
import { getSearchDataStart, getSearchDataFail } from '../../core/redux/actions';

const mapDispatchToProps = { getSearchDataStart, getSearchDataFail };

export const SearchContainer = connect(null, mapDispatchToProps);
