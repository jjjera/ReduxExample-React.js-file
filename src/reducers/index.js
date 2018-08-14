import UserList from './reduser-user';
import {combineReducers} from 'redux';

const reduserList = combineReducers({
user : UserList
});
export default reduserList;
