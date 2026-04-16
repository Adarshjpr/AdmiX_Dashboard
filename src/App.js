
import { useState } from 'react';
import './App.css';
import TaskManager from './pages/TaskManager';
import UserManagement from './pages/UserManagement';

function App() {

  const[userName , setUserName]=  useState([])


  function handleUserName(name) {
    setUserName((prev) => [...prev, name])
  }
  return (
   <>
   
   <UserManagement  nameArr ={handleUserName} />
  <TaskManager    userName ={userName}/>
   </>
  );
}

export default App;
