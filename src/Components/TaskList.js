import React, { useContext } from 'react';
import { TaskContext } from '../Context/TaskProvider';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
// import "../styles/TaskList.css"
const TaskList = () => {
  const { tasks, deleteTask } = useContext(TaskContext);

  const navigate = useNavigate();
  const handleFollowUpClick = (taskId) => {
    navigate(`/interactions/${taskId}`);
  }
  return (
    <div className='mt-5'>
      <div className='bkg-tranparent-darker'>
        < h2 className="lexend-Font light-text m-3">Today's Tasks</h2>
        <hr className='light-text'/>
        {tasks.map((task) => (
          <div class="mt-3">
            <div class="list-group">
              {/* <!-- List Item --> */}
              <div class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="mb-1 p-1 me-2">{task.restaurant.restraunt_name}</h5>
                  <small class="text-muted">Note: Important client</small>
                </div>
                <div class="d-flex align-items-center">
                  <small class="text-muted">Added: {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString()}</small>
                </div>
                <button
                  onClick={() => handleFollowUpClick(task.restaurant.id)}
                  className="btn btn-info btn-sm light-text"
                >
                  get follow up
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>

            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default TaskList;