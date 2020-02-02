import React from 'react';
import PropTypes from 'prop-types';

const AddRow = ({ addRowToList }) => (
  <button type="button" onClick={addRowToList}>
    Add Row
  </button>
);

AddRow.propTypes = {
  addRowToList: PropTypes.func.isRequired,
};

export default AddRow;
