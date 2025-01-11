import React, { Component } from 'react';
import NavigationBar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
      render() {
            return (
                  <div>
                        <NavigationBar/>
                        <h1>Hello!</h1>
                  </div>
            )
      }
}

export default Home;