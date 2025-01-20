import React, { useState, useEffect } from "react";
import axios from "axios";
import NavigationBar from "./Navbar";
import "../styles/AddLeads.css"

const RegisterLeadForm = ({ lead, isUpdateMode, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    restraunt_name: "",
    restraunt_address: "",
    POC1_name: "",
    POC1_phone_number: "",
    POC1_email: "",
    POC1_role: "manager",
    POC2_name: "",
    POC2_phone_number: "",
    POC2_email: "",
    POC2_role: "owner",
    call_frequency: 2,
    status: "new",
  });


  // Pre fill the form if is in update Mode
  useEffect(() => {
    if (isUpdateMode && lead) {
      setFormData({ ...lead });
    }
  }, [isUpdateMode, lead]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isUpdateMode) {
      try {
        const response = await axios.put(`http://localhost:5000/api/leads/${lead.id}`, formData);
        alert('Lead updated Successfully!');
        onSubmit(); //notify the parent(card List) to refresh data

      } catch (err) {
        console.log('error updating lead : ', err);
        alert('Failed to update the lead.');
      }
      onClose();
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/leads",
          formData
        );
        console.log(response.data)
        alert(response.data.message);
      } catch (error) {
        console.log(error);
        alert("Error registering lead :", error);
      }

    }
  };

  return (
    <div>
      <NavigationBar />
      <h2 className="Header_Color">{isUpdateMode ? 'Update Lead' : 'Register New Lead'}</h2>
      <div className="container mt-5 mb-5 card w-90">
        <form onSubmit={handleSubmit}>
          <div className="mt-3 row align-items-start">
            <label>
              Restaurant Name:
              <input
                type="text"
                placeholder="Nirvana Restraunt"
                className="form-control"
                name="restraunt_name"
                value={formData.restraunt_name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-label mt-3">
              Restaurant Address:
              <input
                type="text"
                placeholder="K-110, Basement, Hauz Khas Enclave, New Delhi, Delhi 110016, India"
                className="form-control"
                name="restraunt_address"
                value={formData.restraunt_address}
                onChange={handleChange}
                required
              />
            </label>

            <div className="col row card mt-3 m-3">
              <h3>Point of Contact 1</h3>
              <label className="mt-3 mb-3 form-label">
                Name:
                <input
                  className="form-control" placeholder="John Doe"
                  type="text"
                  name="POC1_name"
                  value={formData.POC1_name}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Phone Number:
                <input
                  type="text"
                  className="form-control"
                  placeholder="000-000-0000"
                  name="POC1_phone_number"
                  value={formData.POC1_phone_number}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Email:
                <input
                  type="email"
                  name="POC1_email"
                  className="form-control"
                  placeholder="abc@gmail.com"
                  value={formData.POC1_email}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Role:
                <select
                  name="POC1_role"
                  className="form-control"
                  value={formData.POC1_role}
                  onChange={handleChange}
                >
                  <option value="manager">Manager</option>
                  <option value="owner">Owner</option>
                </select>
              </label>
            </div>
            <div className="col row mt-3 card m-3">
              <h3>Point of Contact 2</h3>
              <label className="mt-3 mb-3 form-label">
                Name:
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mary Jane"
                  name="POC2_name"
                  value={formData.POC2_name}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Phone Number:
                <input
                  type="text"
                  name="POC2_phone_number"
                  className="form-control"
                  placeholder="111-111-1111"
                  value={formData.POC2_phone_number}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Email:
                <input
                  type="email"
                  className="form-control"
                  placeholder="xyz@gmail.com"
                  name="POC2_email"
                  value={formData.POC2_email}
                  onChange={handleChange}
                />
              </label>

              <label className="mt-3 mb-3 form-label">
                Role:
                <select
                  name="POC2_role"
                  className="form-control"
                  value={formData.POC2_role}
                  onChange={handleChange}
                >
                  <option value="manager">Manager</option>
                  <option value="owner">Owner</option>
                </select>
              </label>
            </div>

            <div className="mt-3">
              <label>
                Call Frequency (per week):
                <input
                  type="number"
                  className="form-control"
                  name="call_frequency"
                  value={formData.call_frequency}
                  onChange={handleChange}
                  min="1"
                />
              </label>
            </div>

            <div className="mt-3 mb-3">
              <label>
                Status:
                <select
                  className="form-control"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="discussion">Discussion</option>
                  <option value="closed">Closed</option>
                </select>
              </label>
            </div>
          </div>
          <button className="btn btn-primary mb-3" type="submit">{isUpdateMode ? 'Update Lead' : 'Register Lead'}</button>

          {/* {isUpdateMode? ():()} */}
          {/* <button className="btn btn-danger mb-3" type="button" onClick={onClose}>Cancel</button> */}
        </form>
      </div>
    </div>
  );
};

export default RegisterLeadForm;
