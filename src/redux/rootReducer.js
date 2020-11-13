import {combineReducers} from 'redux';
import modalReducer from './modal/modalReducer';
import positionsReducer from './positions/positionsReducer';
import usersReducer from "./users/usersReducer";



const rootReducer = combineReducers({
    users: usersReducer,
    positions: positionsReducer,
    modal:modalReducer

})

export default rootReducer;
