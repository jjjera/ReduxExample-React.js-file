import React, {Component} from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';

class App extends Component {
  render(){
    return(
      <div>
        <h1>UserList</h1>
        <UserList />
        <h1>
          <UserDetail />
        </h1>
      </div>
    );
  }
}
export default App;
