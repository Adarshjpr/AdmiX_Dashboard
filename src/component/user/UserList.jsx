
import React from 'react'

const UserList = ({data}) => {
  return (
<>


{data.map((item , index)=>{
  console.log(item.name)
  return <div>
   <div className="cards"  key={index}>
  <div>{item.name.substring(0, 2)}</div>

  <div>
    <p>{item.name}</p>
    <p>{item.email}</p>
    <p>{item.role}</p>
  </div>

  <div>
    <button>Delete</button>
  </div>
</div></div>
})}

</>
  )
}

export default UserList