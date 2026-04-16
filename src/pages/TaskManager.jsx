

import Taskfrom from "../component/task/Taskfrom";
import TaskCard from "../component/task/TaskCard";
import TaskList from "../component/task/TaskList";
import'../asstes/css/task.css'
import { useState } from "react";



const TaskManager = ({userName}) => {

const[TaskData ,setTaskData] = useState([])


const addTask =(task)=>{
  setTaskData((prev) => [...prev , task ])
}


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
<Taskfrom   userName ={userName}   addTask ={addTask}/>

            <div>
<TaskList TaskData={TaskData} />

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TaskManager