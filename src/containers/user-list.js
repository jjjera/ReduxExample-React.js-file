import React, { Component } from "react";
import {connect} from 'react-redux';

class UserList extends Component {
  createListItems(){
    return this.props.contact.map((contact, index) => {
      return(
        <li key={index}>
          {contact.name} {contact.age}
        </li>
      );
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.createListItems()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state){
    console.log('state is', state);
  return{
        contact :state.Checkuser
  };

}
export default connect(mapStateToProps)(UserList);
