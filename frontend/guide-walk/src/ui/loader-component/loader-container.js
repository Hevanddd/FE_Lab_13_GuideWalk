import { connect } from 'react-redux';
import { isLoadingSelector, isLoadingPaginationSelector } from '../../core/redux/selectors';

const mapStateToProps = (state) => ({
  isLoading: isLoadingSelector(state),
  isLoadingPagination: isLoadingPaginationSelector(state),
});
const mapDispatchToProps = {};

export const LoaderContainer = connect(mapStateToProps, mapDispatchToProps);
