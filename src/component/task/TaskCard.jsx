import React from 'react'

const TaskCard = () => {
  return (

<>

          <div className="tm-header">
            <div className="tm-title">Task Management</div>
            <div className="tm-subtitle">3 tasks · 33% complete</div>
          </div>

          <div className="tm-stats">
            <div className="tm-stat">
              <div className="tm-stat-label">Total</div>
              <div className="tm-stat-value blue">3</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Completed</div>
              <div className="tm-stat-value green">1</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Pending</div>
              <div className="tm-stat-value amber">2</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Progress</div>
              <div className="tm-stat-value blue">33%</div>
              <div className="tm-progress-bar-wrap">
                <div className="tm-progress-bar-fill" />
              </div>
            </div>
          </div>
</>
)
}

export default TaskCard