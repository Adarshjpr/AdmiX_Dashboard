

import Taskfrom from "../component/task/Taskfrom";
import TaskCard from "../component/task/TaskCard";
import TaskList from "../component/task/TaskList";
import'../asstes/css/task.css'
import { use, useCallback, useState } from "react";
import PerformanceMonitor from "../component/task/PerformanceMonitor";



const TaskManager = ({userName}) => {

const[TaskData ,setTaskData] = useState([])
const[workStatus , setworkStatus] = useState([])


const addTask =useCallback((task)=>{
  setTaskData((prev) => [...prev , task ])
}, [] )
const updateTask = useCallback( (updatedTasks) => {
  setTaskData(updatedTasks);
},[])
 
const  total = TaskData.length 
const done = TaskData.filter((t) => t.checked).length;
const pending = TaskData.length - done;
   return (
    <>

      <div className="tm-root">
        <div className="tm-card">

<TaskCard  done ={done} total ={total}  pending={pending} />
          <div className="tm-tabs">
            <div className="tm-tab active">All (3)</div>
            <div className="tm-tab">Pending (2)</div>
            <div className="tm-tab">Done (1)</div>
          </div>

          <div className="tm-body">

          <div>
          
          <Taskfrom   userName ={userName}   addTask ={addTask}/>
 <div>
          <PerformanceMonitor   addTask ={addTask} />
          </div>
          
          </div>
            <div>
<TaskList TaskData={TaskData} updateTask ={updateTask} />

            </div>
          </div>


         
        </div>

        
      </div>
    </>
  );
}

export default TaskManager