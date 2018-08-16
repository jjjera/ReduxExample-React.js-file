import UserList from './reduser-user';
import MovieList from './reducer-location';
import {combineReducers} from 'redux';

const reduserList = combineReducers({
Checkuser : UserList
});
export default reduserList;
