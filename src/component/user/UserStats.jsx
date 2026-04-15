import React from 'react'

const UserStats = ({count}) => {
  return (
<>

<div className="user-stats">
      <p>Developer <span>{count.Developer}</span></p>
      <p>Designer <span>{count.Designer}</span></p>
      <p>Manager <span>{count.Manager}</span></p>
      <p>Tester <span>{count.Tester}</span></p>
</div>
</>
  )
}

export default UserStats