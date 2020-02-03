import React from 'react';
import {
  ListGroup,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const RowItem = ({ row, updateRow, index }) => (
  <ListGroup.Item variant={row.disable ? 'warning' : (row.quantity !== 0 ? 'success' : 'light')}>
    <Row>
      <Col xs={2}>
        <Form.Control
          as="select"
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
        </Form.Control>
      </Col>
      <Col xs={5}>
        <Form.Control
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
      </Col>
      <Col xs={2}>
        <Button
          variant="outline-danger"
          onClick={() => updateRow(
            index,
            row,
            row.quantity,
            'delete',
            row.disable,
          )}
        >
          Delete
        </Button>
      </Col>
      <Col xs={3}>
        <Button
          variant={!row.disable ? 'warning' : 'success'}
          onClick={() => updateRow(
            index,
            row,
            row.quantity,
            row.operation,
            !row.disable,
          )}
        >
          {!row.disable ? 'Disable' : 'Enable'}
        </Button>
      </Col>
    </Row>
  </ListGroup.Item>
);

RowItem.defaultProps = {
  row: {},
};

RowItem.propTypes = {
  row: PropTypes.shape({
    quantity: PropTypes.number,
    operation: PropTypes.string,
    disable: PropTypes.bool,
  }),
  updateRow: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default RowItem;
