import React from 'react';
import NavigationBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './TaskList';

function Dashboard() {
      const navigate = useNavigate();
     
      
      const handleAddLeads = () => {
            navigate('/addLeads');
      }

      const handleGetAllLeads = () => {
            navigate('/allLeads');
      }
      const handleAddTaskClick=()=>{
            navigate('/allTasks');
      }

      return (

            <div>
                  <NavigationBar />
                  <div className='row'>
                        <div className='col-4'>

                              <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                                    <button className="btn btn-primary btn-lg" type="button" onClick={handleAddLeads} >Add New Lead </button>
                                    <button className="btn btn-primary btn-lg" type="button" onClick={handleGetAllLeads}>Track All Leads</button>
                              </div>
                        </div>
                        <div className='col-6'>
                              <TaskList/>
                        </div>
                  </div>
            </div>
      );
}

export default Dashboard;