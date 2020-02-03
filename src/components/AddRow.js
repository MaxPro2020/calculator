import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const AddRow = ({ addRowToList }) => (
  <Button onClick={addRowToList} variant="outline-primary" className="mb-3">Add Row</Button>
);

AddRow.propTypes = {
  addRowToList: PropTypes.func.isRequired,
};

export default AddRow;
