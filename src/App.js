import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getUsersRequest} from './actions/users';
import StyledHeader from './components/styles/Header.styled';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';

class App extends Component {
  constructor(props){
    super(props);
    this.props.getUsersRequest();
  }
  render(){
    const users = this.props.users;
    return (
      <div className="App">
        <StyledHeader>
          The Users Information
        </StyledHeader>
        <UsersForm />
        <UsersList users={users.items}></UsersList>
      </div>
    );
  }
}

export default connect(({users})=> ({users}), {getUsersRequest})(App);
