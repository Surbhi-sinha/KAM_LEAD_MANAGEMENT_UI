import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isEmail } from "validator"
const Login = () => {
      const [formData, setFormData] = useState({
            username: "",
            password: "",
      });

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log("Login Data:", formData);
            // Add logic to handle Login with backend
      };

      return (
            <div className="container mt-5 card w-50" >
                  <h2 className="card-header mt-3 mb-5">Login</h2>
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
      );
};

export default Login;
