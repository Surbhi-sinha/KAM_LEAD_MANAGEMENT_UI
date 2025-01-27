import React from 'react';
import NavigationBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from './TaskList';
import todoimage from '../Images/todoimage.svg'
function Dashboard() {
      const navigate = useNavigate();
     
      
      const handleAddLeads = () => {
            navigate('/addLeads');
      }

      const handleGetAllLeads = () => {
            navigate('/allLeads');
      }

      return (

            <div>
                  <NavigationBar />
                  <div className='row p-5 m-2'>
                        <div className='col-4 bkg-transparent-darker p-2 m-3'>
                              <img src={todoimage} className='img-fluid' />
                              <button className="btn button-light btn-lg m-2" type="button" onClick={handleAddLeads} >Add New Lead </button>
                              <button className="btn button-light btn-lg" type="button" onClick={handleGetAllLeads}>Track All Leads</button>
                        </div>
                        <div className='col-7'>
                              <TaskList />
                        </div>
                  </div>
            </div>
      );
}

export default Dashboard;