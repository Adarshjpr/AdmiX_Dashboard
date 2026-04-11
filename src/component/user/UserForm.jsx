
import React from 'react'

const UserForm = () => {
  return (
    <>
    
      <form className='form-css' >
      <h3>➕ New User Add Karo</h3>

      <input

        placeholder="Full Name"
    
      />
      <input

        placeholder="Email"
        type="email"
      
      />
      <select >
        <option>Developer</option>
        <option>Designer</option>
        <option>Manager</option>
        <option>Tester</option>
      </select>

      <button >
        Add User
      </button>
    </form>
    </>
  )
}

export default UserForm