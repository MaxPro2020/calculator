import {
  ADD_ROW,
  VISUALIZE_ROWS_LIST,
  UPDATE_ROW,
  UPDATE_RESULTS,
  DELETE_ROW,
} from './types';

// action creators
const addRowToList = () => ({
  type: ADD_ROW,
});

const visualizeRowsList = (list) => ({
  type: VISUALIZE_ROWS_LIST,
  list,
});

const updateRow = (id, quantity, operation, disable) => ({
  type: UPDATE_ROW,
  payload: {
    id,
    quantity,
    operation,
    disable,
  },
});

const deleteRow = (id) => ({
  type: DELETE_ROW,
  payload: {
    id,
  },
});

const updateResults = (row, quantity, operation, disable) => ({
  type: UPDATE_RESULTS,
  payload: {
    row,
    quantity,
    operation,
    disable,
  },
});

export {
  addRowToList,
  visualizeRowsList,
  updateRow,
  updateResults,
  deleteRow,
};
