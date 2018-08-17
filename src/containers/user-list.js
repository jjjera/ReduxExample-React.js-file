import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedUser } from "../actions/index";
import { bindActionCreators } from "redux";

class UserList extends Component {
  createListItems() {
    return this.props.contact.map((contact, index) => {
      return (
        <li key={index} onClick={() => this.props.selectedUser(contact)}>
          {contact.name} {contact.age}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul>{this.createListItems()}</ul>
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
function matchDispatchProps(dispatch) {
  return bindActionCreators({ selectedUser: selectedUser }, dispatch);
}
export default connect(mapStateToProps, matchDispatchProps)(UserList);
