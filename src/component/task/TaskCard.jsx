import React from 'react'

const TaskCard = ({done , pending ,total}) => {


const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  return (

<>

          <div className="tm-header">
            <div className="tm-title">Task Management</div>
            <div className="tm-subtitle">3 tasks · 33% complete</div>
          </div>

          <div className="tm-stats">
            <div className="tm-stat">
              <div className="tm-stat-label">Total</div>
              <div className="tm-stat-value blue">{total}</div>
            </div>
            <div className="tm-stat">+

            
              <div className="tm-stat-label">Completed</div>
              <div className="tm-stat-value green">{done}</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Pending</div>
              <div className="tm-stat-value amber">{pending}</div>
            </div>
            <div className="tm-stat">
              <div className="tm-stat-label">Progress</div>
              <div className="tm-stat-value blue">{percent}%</div>
              <div className="tm-progress-bar-wrap">
                <div className="tm-progress-bar-fill" style={{ width: `${percent}%` }} />
              </div>
            </div>
          </div>
</>
)
}

export default TaskCard