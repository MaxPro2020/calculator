import { connect } from 'react-redux';
import { addRowToList } from '../actions';
import AddRow from '../components/AddRow';

const mapDispatchToProps = (dispatch) => ({
  addRowToList: () => {
    dispatch(addRowToList());
  },
});

export default connect(null, mapDispatchToProps)(AddRow);
