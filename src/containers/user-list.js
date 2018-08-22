import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedUser } from "../actions/index";

class UserList extends Component {
  selectedUsers = (contact) => {
    console.log("selectedUsers is called!");
    this.props.dispatch(selectedUser(contact));
  };

  render() {
    const CreateListItems = () => {
      return this.props.contact.map((contact, index) => {
        return (
          <li key={index} onClick={() => this.selectedUsers(contact)}>
            {contact.name} {contact.age}
          </li>
        );
      });
    };
    return (
      <div>
        <ul>
          <CreateListItems />
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state is", state);
  return {
    contact: state.Checkuser
  };
}

export default connect(mapStateToProps)(UserList);
