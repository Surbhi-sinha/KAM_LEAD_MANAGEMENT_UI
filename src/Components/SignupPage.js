import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Signupgif from '../Images/signimage.svg';
import 'animate.css'; // Import Animate.css;
import '../styles/Auth.css';

const Signup = () => {
      const [showSuccess, setShowSuccess] = useState(false);


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
            // Add logic to handle signup with backend
            try {
                  const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
                  // alert(response.data.message);
                  setShowSuccess(true);
                  setTimeout(() => { setShowSuccess(false) }, 2000)
                  // navigate("/");
            } catch (err) {
                  console.log(err);
                  alert('Error registering User :', err)
            }
      };

      return (
            <div className="p-4">
                  <div className="container mt-4">
                        <div className="bkg-transparent-dark m-4 mt-5 mb-5 p-4 rounded-3">
                              <div className="row justify-content-center">
                                    <div className="col-md-6">
                                          <img src={Signupgif} alt="Description of the SVG image" height="600" />
                                    </div>
                                    <div className="col-md-6">
                                          <div className="container mt-5 card bg-transparent lexend-Font light-text border-0 p-2" >
                                                <h2 className="card-header mt-3 mb-5">Welcome to KAM</h2>
                                                <p className="mb-5">"Streamline Your Leads, Simplify Your Success – Sign Up Today and Take Control of Your Business Growth! 🚀"</p>
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
                                                                        placeholder="John Doe"
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
                                                                        placeholder="Johndoe@gmail.com"
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
                                                                        placeholder="******"
                                                                        required
                                                                  />
                                                            </div>
                                                      </div>
                                                      <div className="row">
                                                            <div className="col-sm-8 offset-sm-2">
                                                                  <button type="submit" className="btn button-light hover-effect">Register Now</button>
                                                            </div>
                                                      </div>

                                                      {/* Success Message with Animate.css */}
                                                      {showSuccess && (
                                                            <div className="alert alert-success animate__animated animate__bounceInRight">
                                                                  Sign In Successful! 🎉
                                                            </div>
                                                      )}
                                                </form>

                                                <p className="mt-3">
                                                      Already have an account? <Link to="/login"><span className="light-text">Login here</span></Link>
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Signup;
