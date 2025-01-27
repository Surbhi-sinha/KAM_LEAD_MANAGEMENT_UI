import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NavigationBar from "./Navbar";
import loginimage from '../Images/loginimage.png';
import success from '../Images/suceess.gif';
import '../styles/Auth.css'
import { Link} from "react-router-dom";

const Login = () => {

      const [showSuccess, setShowSuccess] = useState(false);
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

            try {
                  const response = await axios.post("http://localhost:5000/api/auth/signin", formData);
                  
                  // alert(response.data.message);
                  localStorage.setItem('user', JSON.stringify({ username: response.data.username }))

                  setShowSuccess(true);
                  setTimeout(() => {
                        setShowSuccess(false)
                        navigate("/dashboard");
                  }, 3000);
            } catch (err) {
                  console.log(err);
                  let value = err.response.data.message
                  alert("Error Logging in : " + value);
            }
      };

      return (
            <div>
                  <NavigationBar />


                  <div className="container">

                        <div className="row bkg-transparent-dark m-4 mt-5 mb-5 p-4 rounded-3">
                              <div className="col-md-5 ">

                                    <div className="mt-5 card bg-transparent border-0 lexend-Font light-text" >
                                          <h2 className="card-header mt-3 mb-5">Welcome Back!</h2>

                                          <p className="mb-5">"Step Into Your Success – Log In to Seamlessly Manage Leads, Boost Productivity, and Drive Your Business Forward! 🚀✨"</p>
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
                                                                  placeholder="John Doe"
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
                                                                  placeholder="******"
                                                                  required
                                                            />
                                                      </div>
                                                </div>
                                                <div className="row mb-3">
                                                      <div className="col-sm-8 offset-sm-2">
                                                            <button type="submit" className="btn button-light hover-effect">Login</button>
                                                      </div>
                                                </div>
                                          </form>

                                          <p className="mt-3">
                                                Don't have an account? <Link to="/signup"><span className="light-text">Sign up</span></Link>
                                          </p>

                                          {/* Success GIF Modal */}
                                          {showSuccess && (
                                                <div className="success-modal">
                                                      <img src={success} alt="Success" className="success-gif" />
                                                </div>
                                          )}

                                    </div>
                              </div>
                              <div className="col-md-7">
                                    <img src={loginimage} alt="Description of the SVG image" height="600" />
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Login;
