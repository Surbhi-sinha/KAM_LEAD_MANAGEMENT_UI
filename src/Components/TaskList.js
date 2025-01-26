import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskProvider';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TaskList.css"
const TaskList = () => {
  const { tasks, toggleTaskCompletion, deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h2>Tasks</h2>
      {/* <ul> */}
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
      <div class="card-list-item">
          <div class="card shadow-1">
             
              <span
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  marginRight: '10px',
                }}
              >
                {task.title} - {task.restaurant.restraunt_name}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
        </div>
        </div>
          </li>
        ))}
      {/* </ul> */}

      {/* <div class="all">
        <div class="cards">
          <div class="card shadow-1"></div>
          <div class="card shadow-1"></div>
          <div class="card shadow-1"></div>
          <div class="card shadow-1"></div>
        </div>
      </div> */}
    </div>
  );
};

export default TaskList;