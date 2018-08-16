import React, {Component} from 'react';
import UserList from '../containers/user-list';

class App extends Component {
  render(){
    return(
      <div>
        <h1>UserList</h1>
        <UserList />
      </div>
    );
  }
}
export default App;
