import { connect } from 'react-redux';
import { updateRow, deleteRow, updateResults } from '../actions';
import RowItem from '../components/Row';

const mapDispatchToProps = (dispatch) => ({
  updateRow: (id, row, quantity, operation, disable) => {
    if (operation === 'delete') {
      dispatch(deleteRow(id));
    } else {
      dispatch(updateRow(id, quantity, operation, disable));
    }
    dispatch(updateResults(row, quantity, operation, disable));
  },
});

export default connect(null, mapDispatchToProps)(RowItem);
