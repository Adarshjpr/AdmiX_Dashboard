import React, { useState } from "react";
import Search from "../component/user/Search";
import UserForm from "../component/user/UserForm";
import UserList from "../component/user/UserList";
import UserStats from "../component/user/UserStats";

import "../asstes/css/user.css";
const UserManagement = ({nameArr}) => {

const [ search  , setsearch] = useState("")

const[  data , setData] = useState([])


 
const  addUser  = (user) =>{
  setData((prev) => [ ...prev , user])
console.log(user.name)

  nameArr(user.name)
}

const filterDATA  =  data.filter((user) =>{
   return (
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );
})

const rolecount ={
  Developer: 0,
  Designer: 0,
  Manager: 0,
  Tester: 0
}
data.forEach((user)=>{
  if(user.role != undefined){
    rolecount[user.role]++ ;
  }
})


 


  


  return (
    <>
      <h1> User Managment</h1>
      <p>Total {data.length} user</p>

      <Search    search={ search}    setsearch={setsearch} />

      <div className="mid-section">

      <div>
          <UserForm     addUser ={addUser}  />
          <UserStats count={rolecount} />
      </div>
     <div><UserList  data={filterDATA}  /></div>
      </div> 
  
    </>
  );
};

export default UserManagement;
