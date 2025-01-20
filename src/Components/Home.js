import React, { Component } from 'react';
import NavigationBar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css"
// import image1 from "../Images/image1";
class Home extends Component {
      render() {
            return (
                  <div>
                        <NavigationBar />
                        <h1 className='Welcome_Home'>Welcome!</h1>
                        <div className='Welcome_below_text'>
                              to Lead Mananagement System
                        </div>

                        <div className='Welcome_box'>
                              <div className='Welcome_upper'>
                                    Elevate your business growth with a comprehensive platform designed to streamline the management of your potential leads. Our solution empowers you to seamlessly register, track, and organize your leads, ensuring that you never miss an opportunity to nurture relationships and close deals. With an intuitive interface and robust tools, you can efficiently manage every aspect of your lead pipeline while staying focused on what truly matters—growing your business.
                              </div>

                              <div className='Welcome_upper'>

                              Beyond management, the platform enables you to interact effectively with your potential clients, fostering meaningful engagements that drive conversions. From task assignments to follow-ups, our solution is designed to adapt to your unique business needs, providing the flexibility and functionality required to stay ahead in a competitive market. Take charge of your leads with a dynamic system built to enhance productivity and deliver results.


                              {/* Will add a image slider here */}
                                    {/* <div className="slider-container">
                                          <div className="slider" id="slider">
                                                <img src="../Images/image1.png" alt="Image 1" />
                                                <img src="image2.jpg" alt="Image 2" />
                                                <img src="image3.jpg" alt="Image 3" />
                                                <img src="image4.jpg" alt="Image 4" />
                                          </div>
                                          <button className="prev" onclick="prevSlide()">&#10094;</button>
                                          <button className="next" onclick="nextSlide()">&#10095;</button>
                                    </div> */}

                              </div>

                              {/* <div className='Welcome_lower'>
                                    Beyond management, the platform enables you to interact effectively with your potential clients, fostering meaningful engagements that drive conversions. From task assignments to follow-ups, our solution is designed to adapt to your unique business needs, providing the flexibility and functionality required to stay ahead in a competitive market. Take charge of your leads with a dynamic system built to enhance productivity and deliver results.
                              </div> */}
                        </div>
                  </div>
            )
      }
}

export default Home;