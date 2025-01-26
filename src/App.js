// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
//components
import Dashboard from './Components/Dashboard';

import AddLeads from './Components/AddLeads';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Home from './Components/Home';
import AllLeads from './Components/AllLeads';
import Interactions from './Components/Interactions';

import { TaskProvider } from './Context/TaskProvider';

import './App.css';
import TaskList from './Components/TaskList';

class App extends Component {

  render() {
    return (
      <TaskProvider>
        {/* <div> */}

          <div className="App">
            {/* <div> */}


              <BrowserRouter basename=''>

                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/dashboard" element={<Dashboard />}></Route>
                  <Route path="/addLeads" element={<AddLeads />}></Route>
                  <Route path="/login" element={<LoginPage />}></Route>
                  <Route path="/signup" element={<SignupPage />}></Route>
                  <Route path='/allLeads' element={<AllLeads />}></Route>
                  <Route path='/allTasks' element={<TaskList />}></Route>
                  <Route path='/interactions/:leadId' element={<Interactions />}></Route>
                </Routes>
              </BrowserRouter>

            {/* </div> */}
          {/* </div> */}

        </div>
      </TaskProvider>
    );
  };
}

export default App;
