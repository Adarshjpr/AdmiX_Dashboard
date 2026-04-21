import React, { useEffect, useState } from 'react'

const TaskList = ({TaskData ,updateTask}) => {



   const handelCheak = (index) => {
    const updated = [...TaskData];

    updated[index] = {
      ...updated[index],
      checked: !updated[index].checked
    };
// console.log(updated[index].checked) updated[index].checked = ! updated[index].checked
    updateTask(updated);
  };



  return (

    <>
    
    
              <div className="tm-tasks-count">{TaskData.length} tasks shown</div>
{

    TaskData.map((item , index)=>{
return <div className="tm-task-card border-red">
                <div className="tm-task-top">
                  <div className="tm-task-left">
                 <input type="checkbox" className="tm-checkbox"    checked={item.checked} onChange={()=>handelCheak(index)} />
                    <div className="tm-task-name">{item.title}</div>
                  </div>
                  <div className="tm-delete-btn">Delete</div>
                </div>
                <div className="tm-task-desc">{item.Description}</div>
                <div className="tm-task-meta">
               <span
                className={`tm-badge ${
                  item.priority === "High"
                    ? "badge-high"
                    : item.priority === "Medium"
                    ? "badge-medium"
                    : "badge-low"
                }`}
              >
                {item.priority}
              </span>
                  <div className="tm-avatar avatar-rv">{item.userName.substring(0, 2)}</div>
                  <span className="tm-meta-name">{item.userName}</span>
                  <span className="tm-meta-date overdue">Overdue: {item.dateInput}</span>
                  <span className="tm-status-badge status-pending">Pending</span>
                </div>
              </div>
    })
}
              
    
    </>
  )
}

export default TaskList