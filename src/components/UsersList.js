import React, { Component } from 'react';
import List from './styles/List.styled';
import Item from './styles/Item.styled';
import Button from './styles/Button.styled';

class UsersList extends Component{
  constructor(props){
    super(props)
    this.state ={
      users: props.users
    }
  }

  render(){
    return(
      <>
        <List>
        {
          this.state.users.sort((a,b)=> {
            if(a.firstName > b.firstName){
              return 1;
            }
            else if(a.firstName < b.firstName){
              return -1;
            }
            else{
              if(a.lastName > b.lastName){
                return 1;
              }
              else{
                return -1;
              }
            }
          }).map(user => {
            return(
              <Item key={user.id}>
                <section>
                  <p style={{fontSize: "1.2em"}}>
                    {user.firstName} { } 
                    {user.lastName}
                  </p>
                </section>
                <Button style={{backgroundColor: "red"}}>
                  Delete
                </Button>
              </Item>
            )
          })
        }
        </List>
      </>
    )
  }
}

export default UsersList;