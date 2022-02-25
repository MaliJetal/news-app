import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUsersRequest, deleteUserRequest, usersError} from './actions/users';
import { createUserRequest } from './actions/users';
import StyledHeader from './components/styles/Header.styled';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';
import {Alert} from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.props.getUsersRequest();

    this.handleRequest = this.handleRequest.bind(this);
    this.handleDeleteUserClick = this.handleDeleteUserClick.bind(this);
  }

  handleRequest({firstName, lastName}){
    this.props.createUserRequest({firstName, lastName});
  }

  handleDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: ''
    });
  };


  render(){
    const users = this.props.users;
    return (
      <div className="App">
        <StyledHeader>
          The Users Information
        </StyledHeader>
        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          {this.props.users.error}
        </Alert>
        <UsersForm submitAction = {this.handleRequest}/>
        <UsersList users={users.items} onDeleteUser= {this.handleDeleteUserClick}></UsersList>
      </div>
    );
  }
}

export default connect(({users})=> ({users}), {getUsersRequest, createUserRequest, deleteUserRequest, usersError})(App);
