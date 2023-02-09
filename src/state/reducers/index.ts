import { combineReducers } from 'redux';
import employeeReducer from './employeeReducer';

//  combineReducers turns an object whose values are different reducer functions, into a single reducer function
const reducers = combineReducers({
  employee: employeeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
