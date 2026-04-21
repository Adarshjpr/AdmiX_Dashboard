

import React, { useRef } from 'react'
import '../../asstes/css/task.css'
const PerformanceMonitor =  React.memo(() => {

      const renderCount = useRef(0);
  renderCount.current += 1;
  return (
    <div><div className="perf-container">
  <h3 className="perf-title">Performance Monitor </h3>

  <div className="perf-row">
    <span>Page renders</span>
    <span className="perf-value blue"> {renderCount.current}</span>
  </div>

  <div className="perf-row">
    <span>useCallback saves</span>
    <span className="perf-value green">0 re-renders prevented</span>
  </div>

  <div className="perf-row">
    <span>useMemo recalc</span>
    <span className="perf-value">1 times</span>
  </div>

  <div className="perf-row">
    <span>Showing</span>
    <span className="perf-value">5 of 5</span>
  </div>
</div></div>
  )
})

export default PerformanceMonitor