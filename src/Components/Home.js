import React, { Component } from 'react';
import NavigationBar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import "bootstrap/dist/js/bootstrap.min.js";

import call1 from '../Images/call1.jpg'
import call2 from '../Images/call2.jpg'
import call3 from '../Images/call3.jpg'
import call4 from '../Images/call4.jpg'
import addLead from '../Images/addLead.png'
import AllLeads from '../Images/AllLeads.png'
import Dashboard from '../Images/Dashboard.png'
import Interaction from '../Images/Interaction.png'
import signup from '../Images/signup.png'
import login from '../Images/login.png'
// import image1 from "../Images/image1";
class Home extends Component {
      render() {
            return (
                  <div>
                        <NavigationBar />
                        <div>
                              <div>
                                    <div className='container mt-4'>
                                          <div className='row justify-content-center m-4 mt-5 p-4 bkg-transparent rounded-3' style={{ height: '80vh' }}>
                                                <div className="col-md-6 d-grid justify-content-center align-items-center">
                                                      <img
                                                            src={Dashboard} // Use the imported image
                                                            alt="Sample"
                                                            className="rounded h-75 w-100 "
                                                            style={{ objectFit: 'initial' }}
                                                      />
                                                </div>
                                                <div className="col-md-6 p-4">
                                                      <h2 className='text-start fw-bold light-text lexend-Font'>Free Lead Management & Tracking Software</h2>
                                                      <p className='text-start m-3 light-text lexend-Font'>Organize, prioritize, and engage prospects in one centralized platform with free lead management software.</p>

                                                      <ul className='text-start m-4 list-unstyled lexend-Font'>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Get full visibility into each lead’s journey with your business
                                                            </li>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Streamline automated lead assignments and follow-ups
                                                            </li>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Use custom criteria to automatically score and prioritize leads
                                                            </li>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Get full visibility into each lead’s journey with your business
                                                            </li>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Streamline automated lead assignments and follow-ups
                                                            </li>
                                                            <li className='mb-2 light-text'>
                                                                  <i className="bi bi-check-circle-fill text-warning me-3"></i>
                                                                  Use custom criteria to automatically score and prioritize leads
                                                            </li>
                                                      </ul>
                                                </div>
                                          </div>
                                          <div style={{ height: '100px' }}></div>
                                          <br />
                                          <div className='row justify-content-center m-4 light-text lexend-Font text-start'>
                                                <div className='col-md-6 p-4'>
                                                      <h3 >
                                                            Centralize lead management to boost conversions.
                                                      </h3>
                                                      <p className='mt-5'>
                                                            Stop wasting time tracking leads through disconnected tools and databases. With KamSpot’s lead management software, you have all your contact data in one place, so you can personalize prospect outreach without digging for details.
                                                      </p>
                                                      <p className='mt-5'>
                                                            Easily access each lead’s history, including company information and a timeline of every touchpoint between the contact and your business. Automatically prioritize leads with custom scoring criteria, and grow your database with smart segmenting and nurturing features.
                                                      </p>
                                                </div>
                                                <div className='col-md-6 p-4 d-grid justify-content-center align-items-center'>
                                                      <img
                                                            src={Interaction} // Use the imported image
                                                            alt="Sample"
                                                            className=" rounded h-100 w-100"
                                                            style={{ objectFit: 'cover' }}
                                                      />
                                                </div>
                                          </div>


                                          <div className='light-text lexend-Font m-5 p-2'>
                                                <h1>
                                                      205,000+ customers in over 135 countries grow their businesses with KamSpot
                                                </h1>
                                          </div>

                                          <div className='bkg-transparent-light'>
                                                <div className='row justify-content-center m-5 light-text lexend-Font text-start'>
                                                      <div className='col-md-6 p-4 d-grid justify-content-center align-items-center'>
                                                            <img
                                                                  src={Interaction} // Use the imported image
                                                                  alt="Sample"
                                                                  className=" h-100 w-100 rounded p-2"
                                                                  style={{ objectFit: 'cover' }}
                                                            />
                                                      </div>
                                                      <div className='col-md-6 p-4'>
                                                            <h2>Get full context on every lead.</h2>
                                                            <hr />
                                                            <p className='mt-5'>
                                                                  Without a personalized follow-up and handoff experience, even the most qualified leads can lose interest. But customizing outreach is time-consuming. KamSpot’s lead management software integrates all your lead touchpoints across marketing, sales, operations, and service to help you make informed follow-ups.
                                                            </p>
                                                      </div>
                                                </div>
                                                <div className='row justify-content-center m-5 light-text lexend-Font text-start'>
                                                      <div className='col-md-6 p-4'>
                                                            <h2>

                                                                  Register Your Potential leads.
                                                                  <hr />
                                                            </h2>
                                                            <p className='mt-5'>

                                                                  Identify the most qualified leads by automatically assigning lead scores with custom lead scoring criteria, or let KamSpot create a scoring system for you using historical data. Use lead scores to assign prospects to your sales team, or set up workflows to notify reps when their prospects are primed for conversion.
                                                            </p>
                                                      </div>
                                                      <div className='col-md-6 p-4 d-grid justify-content-center align-items-center'>
                                                            <img
                                                                  src={addLead} // Use the imported image
                                                                  alt="Sample"
                                                                  className=" h-100 w-100 rounded p-2"
                                                                  style={{ objectFit: 'cover' }}
                                                            />
                                                      </div>
                                                </div>
                                                <div className='row justify-content-center m-5 light-text lexend-Font text-start'>
                                                      <div className='col-md-6 p-4 d-grid justify-content-center align-items-center'>
                                                            <img
                                                                  src={AllLeads} // Use the imported image
                                                                  alt="Sample"
                                                                  className=" h-100 w-100 rounded p-2"
                                                                  style={{ objectFit: 'cover' }}
                                                            />
                                                      </div>
                                                      <div className='col-md-6 p-4'>
                                                            <h2>Track leads with data.</h2>
                                                            <hr />
                                                            <p className='mt-5'>Take the guesswork out of lead management with data-backed features. Use contacts’ histories to create segments based on website visits, email interactions, and more. Then target segments with personalized web content and email campaigns, and nurture leads across the funnel.</p>
                                                      </div>
                                                </div>
                                                <div className='row justify-content-center m-5 light-text lexend-Font text-start'>
                                                      <div className='col-md-6 p-4'>
                                                            <h2>

                                                                  Streamline your lead management process.

                                                                  <div>Signup</div>
                                                                  <hr />
                                                            </h2>
                                                            <p className='mt-5'>
                                                                  Avoid having to manually import data across tools. With KamSpot’s lead management tools, you can view information about your leads and follow up with them in the same place. Make calls and send emails while KamSpot tracks every activity for you, and get valuable time back in your day.
                                                            </p>
                                                      </div>
                                                      <div className='col-md-6 p-4'>
                                                            <img
                                                                  src={signup} // Use the imported image
                                                                  alt="Sample"
                                                                  className="img-fluid rounded h-100"
                                                                  style={{ objectFit: 'cover' }}
                                                            />
                                                      </div>
                                                </div>
                                                <div className='row justify-content-center m-5 light-text lexend-Font text-start'>
                                                      <div className='col-md-6 p-4 d-grid justify-content-center align-items-center'>
                                                            <img
                                                                  src={login} // Use the imported image
                                                                  alt="Sample"
                                                                  className=" h-100 w-100 rounded p-2"
                                                                  style={{ objectFit: 'cover' }}
                                                            />
                                                      </div>
                                                      <div className='col-md-6 p-4'>
                                                            <h2>Efficient User login.</h2>
                                                            <hr />
                                                            <p className='mt-5'>Take the guesswork out of lead management with data-backed features. Use contacts’ histories to create segments based on website visits, email interactions, and more. Then target segments with personalized web content and email campaigns, and nurture leads across the funnel.</p>
                                                      </div>
                                                </div>
                                          </div>


                                          <div className='light-text lexend-Font m-3'>
                                                <h2>
                                                      Related Resources
                                                </h2>
                                          </div>
                                          <div className='light-text lexend-Font m-3'>
                                                If you’re interested in lead management software, these related resources may help.</div>
                                          <div>
                                                <div className='row p-2'>
                                                      <div class="card" style={{ width: "18rem" }} className='m-3 bg-light p-3 text-start rounded'>
                                                            <img src={call1} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                  <h5 class="card-title">Card title</h5>
                                                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                      </div>
                                                      <div class="card" style={{ width: "18rem" }} className='m-3 bg-light p-3 text-start rounded'>
                                                            <img src={call2} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                  <h5 class="card-title">Card title</h5>
                                                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                      </div>
                                                      <div class="card" style={{ width: "18rem" }} className='m-3 bg-light p-3 text-start rounded'>
                                                            <img src={call3} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                  <h5 class="card-title">Card title</h5>
                                                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                      </div>
                                                      <div class="card" style={{ width: "18rem" }} className='m-3 bg-light p-3 text-start rounded'>
                                                            <img src={call4} class="card-img-top" alt="..." />
                                                            <div class="card-body">
                                                                  <h5 class="card-title">Card title</h5>
                                                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                                  <a href="#" class="btn btn-primary">Go somewhere</a>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>

                                          <div className="container  row justify-content-center bkg-tranparent-darker-x light-text Lexend-Font p-3" style={{ height: '500px' }}>
                                                <h1 className='mt-5'>Popular Features in HubSpot</h1>
                                                <h3>Lead management software is available in multiple KamSpot products. Explore additional KamSpot features below.</h3>
                                                <div id="cardSlider" class="carousel slide" data-bs-ride="carousel">
                                                      {/* <!-- Carousel Indicators --> */}
                                                      <div class="carousel-indicators">
                                                            <button type="button" data-bs-target="#cardSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#cardSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#cardSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                      </div>

                                                      {/* <!-- Carousel Inner --> */}
                                                      <div class="carousel-inner">
                                                            {/* <!-- Slide 1 --> */}
                                                            <div class="carousel-item active">
                                                                  <div class="row justify-content-center">
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                            {/* <!-- Slide 2 --> */}
                                                            <div class="carousel-item">
                                                            <div class="row justify-content-center">
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>

                                                            {/* <!-- Slide 3 --> */}
                                                            <div class="carousel-item">
                                                            <div class="row justify-content-center">
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                        <div class="col-md-3">
                                                                              <div class="card">
                                                                                    <div class="card-body">
                                                                                          <h5 class="card-title">Upcoming Features</h5>
                                                                                          <p class="card-text">Lead Management Analytics</p>
                                                                                    </div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>

                                                      {/* <!-- Carousel Controls --> */}
                                                      <button class="carousel-control-prev" type="button" data-bs-target="#cardSlider" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                      </button>
                                                      <button class="carousel-control-next" type="button" data-bs-target="#cardSlider" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                      </button>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            )
      }
}

export default Home;