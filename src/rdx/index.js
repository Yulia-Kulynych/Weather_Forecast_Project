import {createStore, combineReducers} from 'redux';
import {todolistReducer} from './todoList/reducer';

export const store = createStore(combineReducers({
    todo:todolistReducer, //todo:
    
}));

