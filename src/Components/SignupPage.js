import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "./Navbar";
import { isEmail } from "validator"
const Signup = () => {
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
            username: "",
            email: "",
            password: "",
      });

      const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Signup Data:", formData);
            // Add logic to handle signup with backend
            try {
                  const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
                  alert(response.data.message);
                  navigate("/");
            } catch (err) {
                  console.log(err);
                  alert('Error registering User :', err)
            }
      };

      return (
            <div>
                  <NavigationBar />

                  <div className="container mt-5 card w-50" >
                        <h2 className="card-header mt-3 mb-5">Sign Up</h2>
                        <div>

                              <img
                                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                                    alt="profile-img"
                                    className="profile-img-card mt-5 mb-5 rounded-circle img-fluid w-25 "
                              />
                        </div>
                        <form onSubmit={handleSubmit}>
                              <div className="mb-3 row">
                                    <label htmlFor="username" className="col-sm-3 col-form-label fw-bold">Username</label>
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
                                    <label htmlFor="email" className="col-sm-3 col-form-label fw-bold">Email</label>
                                    <div className="col-sm-8">
                                          <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                          />
                                    </div>
                              </div>
                              <div className="mb-3 row">
                                    <label htmlFor="password" className="col-sm-3 col-form-label fw-bold">Password</label>
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
                              <div className="row">
                                    <div className="col-sm-8 offset-sm-2">
                                          <button type="submit" className="btn btn-primary">Register Now</button>
                                    </div>
                              </div>
                        </form>

                        <p className="mt-3">
                              Already have an account? <Link to="/login">Login here</Link>
                        </p>
                  </div>
            </div>
      );
};

export default Signup;
