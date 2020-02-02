import { combineReducers } from 'redux';
import {
  ADD_ROW,
  VISUALIZE_ROWS_LIST,
  UPDATE_ROW,
  UPDATE_RESULTS,
  DELETE_ROW,
} from '../actions/types';

const result = (state = 0, action) => {
  switch (action.type) {
    case UPDATE_RESULTS: {
      window.console.log("I'm updating results: ", state, action.payload);
      let quantity = parseFloat(action.payload.quantity);
      const reg = /^-?\d+\.?\d*$/;
      if (!reg.test(quantity)) {
        return state;
      }
      let oldQuantity = -parseFloat(action.payload.row.quantity);
      if (action.payload.operation === '-') {
        quantity = -quantity;
      } else if (action.payload.operation === 'delete') {
        quantity = 0;
      }
      if (action.payload.row.operation === '-') {
        oldQuantity = -oldQuantity;
      }
      if (action.payload.row.disable !== action.payload.disable) {
        if (action.payload.disable) {
          return parseFloat(Number(state + oldQuantity).toFixed(2));
        }
        return parseFloat(Number(state - oldQuantity).toFixed(2));
      }

      if (action.payload.disable) {
        return state;
      }

      return parseFloat(Number(state + oldQuantity + quantity).toFixed(2));
    }
    default:
      return state;
  }
};


const list = (state = [], action) => {
  switch (action.type) {
    case ADD_ROW: {
      window.console.log("I'm adding a row to list");
      return [
        ...state,
        {
          quantity: 0,
          operation: '+',
          disable: false,
        },
      ];
    }
    case VISUALIZE_ROWS_LIST: {
      window.console.log("I'm visualizing rows list");
      return state;
    }
    case UPDATE_ROW: {
      window.console.log("I'm updating a row: ", state, action);
      const reg = /^-?\d+\.?\d*$/;
      if (!reg.test(action.payload.quantity)) {
        return state;
      }
      return state.map((item, index) => {
        if (index !== action.payload.id) {
          // This isn't the item we care about - keep it as-is
          return item;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...item,
          ...{
            quantity: parseFloat(action.payload.quantity),
            operation: action.payload.operation,
            disable: action.payload.disable,
          },
        };
      });
    }
    case DELETE_ROW: {
      window.console.log("I'm deleting a row: ", state, action);
      return [
        ...state.slice(0, action.payload.id),
        ...state.slice(action.payload.id + 1),
      ];
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  result,
  list,
});

export default rootReducer;
