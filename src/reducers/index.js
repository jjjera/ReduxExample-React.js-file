import UserList from './reduser-user';
import MovieList from './reducer-location';
import {combineReducers} from 'redux';
import ActiveUser from './reducer-active-user';

const reduserList = combineReducers({
Checkuser : UserList,
activeUser: ActiveUser
});
export default reduserList;
