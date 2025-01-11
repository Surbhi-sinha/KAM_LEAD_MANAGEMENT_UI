import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import NavigationBar from "./Navbar";
import { isEmail } from "validator"
const Login = () => {
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
            username: "",
            password: "",
      });

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Login Data:", formData);
            // Add logic to handle Login with backend
            try{
                  const response = await axios.post("http://localhost:5000/api/auth/signin" , formData);
                  console.log(response.data);
                  localStorage.setItem('user' , JSON.stringify({username : response.data.username}))
                  navigate("/");
            }catch(err){
                  console.log(err);
                  alert("Error Logging in : ", err);
            }
      };

      return (
            <div>
                  <NavigationBar/>
           
            <div className="container mt-5 card w-50" >
                  <h2 className="card-header mt-3 mb-5">Login</h2>
                  <div>

                  <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card mt-5 mb-5 rounded-circle img-fluid w-25 "
                  />
                  </div>
                  <form onSubmit={handleSubmit}>
                        <div className="mb-3 row">
                              <label htmlFor="username" className="col-sm-3 col-form-label">Username</label>
                              <div className="col-sm-8">
                                    <input
                                          type="text"
                                          className="form-control"
                                          id="username"
                                          name="username"
                                          value={formData.username}
                                          onChange={handleInputChange}
                                          required
                                    />
                              </div>
                        </div>
                        <div className="mb-3 row">
                              <label htmlFor="password" className="col-sm-3 col-form-label">Password</label>
                              <div className="col-sm-8">
                                    <input
                                          type="password"
                                          className="form-control"
                                          id="password"
                                          name="password"
                                          value={formData.password}
                                          onChange={handleInputChange}
                                          required
                                    />
                              </div>
                        </div>
                        <div className="row mb-3">
                              <div className="col-sm-8 offset-sm-2">
                                    <button type="submit" className="btn btn-primary">Login</button>
                              </div>
                        </div>
                  </form>

            </div>
            </div>
      );
};

export default Login;
