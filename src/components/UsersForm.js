import React, { Component } from 'react';

import Form from './styles/Form.styled.js';
import StyledHeader from './styles/Header.styled.js';
import Section from './styles/Section.styled.js';
import Button from './styles/Button.styled.js';

class UsersForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      firstName : "",
      lastName: ""
    }

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);

  }

  handleFirstName(e){
    this.setState({
      firstName : e.target.value 
    })
  }

  handleLastName(e){
    this.setState({
      lastName : e.target.value 
    })
  }

  handleSubmit(e){
    e.preventDefault();
    
  }

  render(){
    return(
      <>
        <Form onSubmit={this.handleSubmit}>
          <StyledHeader>Create New User</StyledHeader>
          <Section>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input required id="firstName" type="text" value={this.firstName} placeholder= "First Name" onChange={this.handleFirstName} />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input required id="lastName" type="text" value={this.lastName} placeholder= "Last Name" onChange={this.handleLastName} />
            </div>
            <Button>Create</Button>
          </Section>
        </Form>
      </>
    )
  }
}

export default UsersForm;