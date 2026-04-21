  import React, { useState } from 'react'

  const Taskfrom = ({userName , addTask}) => {

  const [tfd   ,setTfd] = useState({
      title: "" ,
      Description :"",
      userName:"",
      dateInput:"",
    priority: "" ,
  checked:false
  });


  const handelChange=(e) =>{


      const{name , value}  = e.target
      setTfd((prev) =>({
          ...prev ,
  [name] :value
      }))
  }

  const handesubmit=(e) =>{
      e.preventDefault()
    addTask(tfd)
  }

    return (

      <>
      
              <form className="tm-form-panel"  onSubmit={handesubmit}>
                <div className="tm-form-title">New Task</div>
              <input className="tm-input" placeholder="Task title *"  name='title'  value={tfd.title} onChange={handelChange} />
                <textarea className="tm-input tm-textarea" placeholder="Description (optional)" name='Description'  value={tfd.Description} onChange={handelChange}  />
                <select className="tm-select" defaultValue=""  value={tfd.userName} onChange={handelChange}  name='userName'>
                  <option value="" >-- Assign to User --</option>
                  {
                      userName.map((item , index)=>{
                          console.log(item)
                          return<option key={index}  value={item}>{item}</option>
            
                      })
                  }
                </select>
                <div className="tm-priority-label">Priority:</div>
              <div className="tm-priority-group">

    <div
      className={`tm-priority-btn ${
        tfd.priority === "Low" ? "selected" : ""
      }`}
      onClick={() =>
        setTfd((prev) => ({ ...prev, priority: "Low" }))
      }
    >
      Low
    </div>

    <div
      className={`tm-priority-btn ${
        tfd.priority === "Medium" ? "selected" : ""
      }`}
      onClick={() =>
        setTfd((prev) => ({ ...prev, priority: "Medium" }))
      }
    >
      Medium
    </div>

    <div
      className={`tm-priority-btn ${
        tfd.priority === "High" ? "selected" : ""
      }`}
      onClick={() =>
        setTfd((prev) => ({ ...prev, priority: "High" }))
      }
    >
      High
    </div>

  </div>
                <input className="tm-date-input" name='dateInput' value={tfd.dateInput} onChange={handelChange}  type="date" placeholder="dd-mm-yyyy"  />
                <button className="tm-add-btn"   type='submit'>+ Add Task</button>
              </form>
      
      </>
    )
  }

  export default Taskfrom