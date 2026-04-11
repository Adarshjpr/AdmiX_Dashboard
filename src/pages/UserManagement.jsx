
import React from 'react'
import Search from '../component/user/Search'
import UserForm from '../component/user/UserForm'
import UserList from '../component/user/UserList'
import UserStats from '../component/user/UserStats'

import '../asstes/css/user.css'
const UserManagement = () => {
  return (
<>

<h1> User Managment</h1>
<p>Total  2 user</p>

<Search/>

<div className="mid-section"><UserForm/>   <UserList/></div>
<UserStats/>
</>
  )
}

export default UserManagement