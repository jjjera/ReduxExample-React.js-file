import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
render(){
  if (!this.props.contact) {
    return(
      <div>Select the user</div>
    );
  }
  return(
    <div>{this.props.contact.name}</div>
  );
}
}
function mapStateToProps(state) {
  console.log("state is", state);
  return {
    contact: state.activeUser
  };
}
export default connect(mapStateToProps)(UserDetail);
