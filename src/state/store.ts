import { legacy_createStore as createStore } from 'redux';

import { getEmployees } from './database';
import { Employee } from './actions';

// createStore creates a Redux store that holds the state tree.

const initialState = {
  employees: [] as Employee[],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return { ...state, employees: action.employees };
    default:
      return state;
  }
};

const store = createStore(reducer);

void (async () => {
  const employees = await getEmployees();
  store.dispatch({ type: 'SET_EMPLOYEES', employees });
})();

export default store;
