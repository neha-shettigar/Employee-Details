import { ActionType } from '../action-types/index';
import { Action, Employee } from '../actions';

// initial state of the store, empty array of type Employee
const initialState: Employee[] = [];

// reducer funtion takes state and action as arguments and returns updated state
const reducer = (
  state: Employee[] = initialState,
  action: Action,
): Employee[] => {
  switch (action.type) {
    // case ADD, takes employee details as payload and updates in the state array
    case ActionType.ADD:
      return [...state, action.payload];
    // case REMOVE, returns state with employee details except the one with given id
    // case ActionType.REMOVE:
    //   return state.filter((employee) => employee.id !== action.payload);
    // // case UPDATE, id given id is present in the state, then update the details with the payload
    // case ActionType.UPDATE:
    //   return state.map((employee) => {
    //     if (employee.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return employee;
    //   });
    default:
      return state;
  }
};

export default reducer;
