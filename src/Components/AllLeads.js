import NavigationBar from './Navbar';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RegisterLeadForm from './AddLeads';

function AllLeads() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isUpdateMode, setIsUpdateMode] = useState(false);


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/leads');
      setRestaurants(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/leads');
        console.log(response.data)
        setRestaurants(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = (lead) => {
    setSelectedLead(lead);
    setIsUpdateMode(true);
  }

  const handleDeleteClick = async (leadId) => {
    if (window.confirm("Are you sure! you want to delete this lead?")) {
      try {
        await axios.delete(`http://localhost:5000/api/leads/${leadId}`);
        alert(`Lead deleted Successfully!`);
        setRestaurants((prev) => prev.filter((restaurant) => { return restaurant.id !== leadId }));
      } catch (err) {
        console.log('Error deleting lead : ', err);
        alert('Failed to delete the lead. Please try again')
      }
    }
  }

  if (loading) {
    return <div className="container mt-4">Loading...</div>;
  }

  if (restaurants.length === 0) {
    return <div className="container mt-4">No restaurants available.</div>;
  }

  return (
    <div>
      {/* Render NavigationBar only if not in update mode */}
      
      {!isUpdateMode && <NavigationBar />}

      {isUpdateMode && selectedLead ? (
        <div className="container mt-4">
          <RegisterLeadForm
            lead={selectedLead} // Pass the selected restaurant data
            isUpdateMode={isUpdateMode} // Indicate update mode
            onClose={() => {
              setIsUpdateMode(false); // Exit update mode
              setSelectedLead(null); // Clear selected restaurant
            }}
            onSubmit={() => {
              setIsUpdateMode(false); // Exit update mode after submission
              setSelectedLead(null); // Clear selected restaurant

              fetchData(); // Refresh the restaurant list
            }}
          />
        </div>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {restaurants.map((restaurant) => (
              <div className="col-md-6 mb-4" key={restaurant.id}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.restraunt_name}</h5>
                    <hr />
                    <p className="card-text">
                      <strong>Address:</strong> {restaurant.restraunt_address}
                    </p>
                    <p className="card-text">
                      <strong>Status:</strong> {restaurant.status}
                    </p>
                    <p className="card-text">
                      <strong>Call Frequency:</strong> {restaurant.call_frequency}
                    </p>
                    <hr />
                    <h6>Point of Contact 1</h6>
                    <p className="card-text">
                      <strong>Name:</strong> {restaurant.POC1_name} <br />
                      <strong>Phone:</strong> {restaurant.POC1_phone_number} <br />
                      <strong>Email:</strong> {restaurant.POC1_email} <br />
                      <strong>Role:</strong> {restaurant.POC1_role}
                    </p>
                    <hr />
                    <h6>Point of Contact 2</h6>
                    <p className="card-text">
                      <strong>Name:</strong> {restaurant.POC2_name} <br />
                      <strong>Phone:</strong> {restaurant.POC2_phone_number} <br />
                      <strong>Email:</strong> {restaurant.POC2_email} <br />
                      <strong>Role:</strong> {restaurant.POC2_role}
                    </p>

                    <hr />
                    <button type="button" className="btn btn-success m-1">Add Task</button>
                    <button type="button" className="btn btn-danger m-1" onClick={() => {
                      handleDeleteClick(restaurant.id)
                    }}>Delete</button>
                    <button type="button" className="btn btn-warning m-1" onClick={() => handleUpdateClick(restaurant)}>Update</button>
                    <button type="button" className="btn btn-info m-1">Interactions</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

  );
}

export default AllLeads;

