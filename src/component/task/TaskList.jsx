import React from 'react'

const TaskList = () => {
  return (

    <>
    
    
              <div className="tm-tasks-count">3 tasks shown</div>

              <div className="tm-task-card border-red">
                <div className="tm-task-top">
                  <div className="tm-task-left">
                 <input type="checkbox" className="tm-checkbox" />
                    <div className="tm-task-name">Login Page Design</div>
                  </div>
                  <div className="tm-delete-btn">Delete</div>
                </div>
                <div className="tm-task-desc">Figma se React mein convert karo</div>
                <div className="tm-task-meta">
                  <span className="tm-badge badge-high">High</span>
                  <div className="tm-avatar avatar-rv">RV</div>
                  <span className="tm-meta-name">Rahul Verma</span>
                  <span className="tm-meta-date overdue">Overdue: 2024-12-20</span>
                  <span className="tm-status-badge status-pending">Pending</span>
                </div>
              </div>
    
    </>
  )
}

export default TaskList