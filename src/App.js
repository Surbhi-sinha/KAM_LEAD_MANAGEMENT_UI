// import logo from './logo.svg';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
//components
import Dashboard from './Components/Dashboard';

import AddLeads from './Components/AddLeads';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import Home from './Components/Home';
import AllLeads from './Components/AllLeads';

import './App.css';

class App extends Component {

  render() {
    return (
      <div>

        <div className="App">
          <div>
            

            <BrowserRouter basename=''>
                
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/addLeads" element={<AddLeads />}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/signup" element={<SignupPage />}></Route>
                <Route path='/allLeads' element={<AllLeads/>}></Route>

              </Routes>
            </BrowserRouter>

          </div>
        </div>

      </div>
    );
  };



}

export default App;
