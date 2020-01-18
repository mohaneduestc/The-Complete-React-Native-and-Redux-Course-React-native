import {combineReducers} from 'redux';
// import LibraryReducer from './LibraryReducer';
// import SelectedReducer from './SelectedReducer';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';


export default combineReducers({
    // libraries:LibraryReducer,
    // selectedLibraryId:SelectedReducer,
    auth:AuthReducer,
    form:EmployeeFormReducer,
    employees:EmployeeReducer

})