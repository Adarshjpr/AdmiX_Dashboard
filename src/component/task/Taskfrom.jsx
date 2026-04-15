import React from 'react'

const Taskfrom = () => {
  return (

    <>
    
            <div className="tm-form-panel">
              <div className="tm-form-title">New Task</div>
              <input className="tm-input" placeholder="Task title *"  />
              <textarea className="tm-input tm-textarea" placeholder="Description (optional)"  />
              <select className="tm-select" defaultValue="">
                <option value="" disabled>-- Assign to User --</option>
                <option>Rahul Verma</option>
                <option>Priya Singh</option>
                <option>Arjun Sharma</option>
              </select>
              <div className="tm-priority-label">Priority:</div>
              <div className="tm-priority-group">
                <div className="tm-priority-btn">Low</div>
                <div className="tm-priority-btn ">Medium</div>
                <div className="tm-priority-btn">High</div>
              </div>
              <input className="tm-date-input" type="date" placeholder="dd-mm-yyyy"  />
              <button className="tm-add-btn">+ Add Task</button>
            </div>
    
    </>
  )
}

export default Taskfrom