import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action, Employee } from '../actions/index';

// An action creator is a function that creates an action object.
export const addEmployee = (employee: Employee) => {
  return (dispatch: Dispatch<Action>) => {
    // dispatch()  to dispatch actions and trigger state changes to the store.
    dispatch({
      type: ActionType.ADD,
      payload: employee,
    });
  };
};

// export const removeEmployee = (id: number) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.REMOVE,
//             payload: id
//         })
//     }
// }

// export const updateEmployee = (employee:Employee) => {
//     return (dispatch: Dispatch<Action>) => {
//         dispatch({
//             type: ActionType.UPDATE,
//             payload:employee,
//         })
//     }
// }
