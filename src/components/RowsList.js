import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Row from '../containers/Row';

const RowsList = ({ list }) => (
  <ListGroup>
    {list.map((row, index) => (
      <Row key={index.toString()} row={row} index={index} />
    ))}
  </ListGroup>
);

RowsList.defaultProps = {
  list: {},
};

RowsList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
    add: PropTypes.bool,
    disable: PropTypes.bool,
  })),
};

export default RowsList;
