import Taskfrom from "../component/task/Taskfrom";
import TaskCard from "../component/task/TaskCard";
import TaskList from "../component/task/TaskList";
import'../asstes/css/task.css'

import React from 'react'

const TaskManager = () => {
   return (
    <>

      <div className="tm-root">
        <div className="tm-card">

<TaskCard/>
          <div className="tm-tabs">
            <div className="tm-tab active">All (3)</div>
            <div className="tm-tab">Pending (2)</div>
            <div className="tm-tab">Done (1)</div>
          </div>

          <div className="tm-body">
<Taskfrom/>

            <div>
<TaskList/>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TaskManager