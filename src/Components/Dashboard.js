import React, { Component, useState } from 'react';
import NavigationBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


function Dashboard() {

      const navigate = useNavigate();

      const handleAddLeads = ()=>{
            navigate('/addLeads');
      }

      const handleGetAllLeads = () =>{
            navigate('/allLeads');
      }
      const [todos, setTodos] = useState([]);
      const [newTodo, setNewTodo] = useState('');

      const addTodo = () => {
            if (newTodo.trim()) {
                  setTodos([...todos, newTodo]);
                  setNewTodo('');
            }
      };

      const deleteTodo = (index) => {
            const updatedTodos = todos.filter((todo, i) => i !== index);
            setTodos(updatedTodos);
      };

      return (

            <div>
                  <NavigationBar />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '50%', backgroundColor: "whitesmoke" }}>

                              <div className="d-grid gap-2 col-6 mx-auto mt-3 mb-3">
                                    <button className="btn btn-primary btn-lg" type="button" onClick={handleAddLeads} >Add New Lead </button>
                                    <button className="btn btn-primary btn-lg" type="button" onClick={handleGetAllLeads}>Track All Leads</button>
                              </div>
                              {/* <button onClick={addTodo}>Add Todo</button>
                              <button onClick={() => setTodos([])}>Clear All</button> */}
                        </div>
                        <div style={{ width: '50%', backgroundColor: "blue" }}>
                              <h3>To-Do List</h3>
                              <input
                                    type="text"
                                    value={newTodo}
                                    onChange={(e) => setNewTodo(e.target.value)}
                                    placeholder="Add a new todo"
                              />
                              <ul>
                                    {todos.map((todo, index) => (
                                          <li key={index}>
                                                {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
                                          </li>
                                    ))}
                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default Dashboard;