import React, { useState } from "react";

const UserForm = ({addUser }) => {
 
const [ formData  ,setFormData] = useState({
  name :"",
  email:"",
  role:"developer"
})

const handelchange =(e)=>{
  const {name , value} = e.target

  setFormData((prev)=>({
    ...prev ,
[name]:value
  }))

}

const handelSubmit =(e) =>{
   e.preventDefault();
addUser(formData)
setFormData ({
    name :"",
  email:"",
  role:"developer"
})
}


  return (
    <>
      <form className="form-css" onSubmit={handelSubmit} >
        <h3>➕ New User Add Karo</h3>

        <input placeholder="Full Name" name="name"  value={formData.name}  onChange={handelchange}   />
        <input placeholder="Email"  name="email"   value={formData.email} onChange={handelchange} type="email" />
        <select  name="role"  value={formData.role} onChange={handelchange} >
    <option value="Developer">Developer</option>
<option value="Designer">Designer</option>
<option value="Manager">Manager</option>
<option value="Tester">Tester</option>
        </select>

        <button type="submit">Add User</button>
      </form>
    </>
  );
};

export default UserForm;
