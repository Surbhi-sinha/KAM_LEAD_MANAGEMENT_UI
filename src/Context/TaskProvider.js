import React, {createContext , useEffect, useState} from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({children}) =>{

   //load task from the localStorage on initial render
   const [tasks , setTask] = useState(()=>{
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
   });


   //save tasks to localStorage whenever they change
   useEffect(()=>{
      localStorage.setItem('tasks' , JSON.stringify(tasks));
   }, [tasks])

   // add a new task
   const addTask = (task)=>{
      setTask((prevTasks)=>[...prevTasks, task]);
   };

   // mark a task as completed
   const toggleTaskCompletion = (taskId) =>{
      setTask((prevTasks) =>
         prevTasks.map((task)=>
            task.id === taskId ? {...task , completed : !task.completed} : task
         )
      );
   }

   //delete the task
   const deleteTask = (taskId)=>{
      setTask((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
   };


   console.log("task in the taskprovider : ",tasks)

   return (
      <TaskContext.Provider value={{tasks , addTask ,toggleTaskCompletion, deleteTask}}>
         {children}
      </TaskContext.Provider>
   );
};