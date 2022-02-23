import axios from 'axios';

export const getUsers = () =>{
  return axios('./users',{
    params:{
      limit: 1000
    },
    headers: {"Access-Control-Allow-Origin": "*"} 
  })
}