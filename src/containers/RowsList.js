import { connect } from 'react-redux';
import RowsList from '../components/RowsList';

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps, null)(RowsList);
