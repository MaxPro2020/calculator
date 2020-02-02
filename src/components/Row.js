import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ row, updateRow, index }) => (
  <li>
    <select
      onChange={(event) => updateRow(
        index,
        row,
        row.quantity,
        event.target.value,
        row.disable,
      )}
    >
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
    <input
      type="number"
      step="0.1"
      value={row.quantity}
      onChange={(event) => updateRow(
        index,
        row,
        event.target.value,
        row.operation,
        row.disable,
      )}
    />
    <button
      type="button"
      onClick={() => updateRow(
        index,
        row,
        row.quantity,
        'delete',
        row.disable,
      )}
    >
      Delete
    </button>
    <button
      type="button"
      onClick={() => updateRow(
        index,
        row,
        row.quantity,
        row.operation,
        !row.disable,
      )}
    >
      {!row.disable ? 'Disable' : 'Enable'}
      {index}
    </button>
  </li>
);

Row.defaultProps = {
  row: {},
};

Row.propTypes = {
  row: PropTypes.shape({
    quantity: PropTypes.number,
    operation: PropTypes.string,
    disable: PropTypes.bool,
  }),
  updateRow: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Row;
