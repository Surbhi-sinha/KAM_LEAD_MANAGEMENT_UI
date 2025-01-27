import React, { useState, useEffect, use } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Interactions.css'; // Import the custom CSS

const Interactions = () => {
      const { leadId } = useParams();
      const [interactions, setInteractions] = useState([]);
      const [loading, setLoading] = useState(true);
      const navigate = useNavigate();
      const [comment, setComment] = useState(''); // State to store the text box value
      const [isLoading, setIsLoading] = useState(false); // State to handle loading state
      const [error, setError] = useState(null); // State to handle errors
      const [lead, setLead] = useState("");

      useEffect(() => {
            const fetchInteractions = async () => {
                  try {
                        const response = await axios.get(`http://localhost:5000/api/Interactions/lead/${leadId}`);
                        setInteractions(response.data);
                        setLoading(false);
                  } catch (error) {
                        console.error('Error fetching interactions:', error);
                        setLoading(false);
                  }
            };

            fetchInteractions();
      }, [leadId]);


      useEffect(() => {
            const fetchLead = async () => {
                  try {
                        const response = await axios.get(`http://localhost:5000/api/leads/${leadId}`);
                        setLead(response.data);
                  } catch (error) {
                        console.error('Error fetching the lead', error);
                  }
            };

            fetchLead();
      }, [])

      const handleButtonClick = async () => {
            if (!comment.trim()) {
                  alert('Please enter a comment.'); // Validate the input
                  return;
            }

            setIsLoading(true); // Set loading state to true
            setError(null); // Reset error state

            try {
                  // Make the POST request
                  const response = await axios.post('http://localhost:5000/api/Interactions/', {
                        comment: comment,
                        LeadId: leadId,
                  });

                  alert('Interaction created successfully!'); // Notify the user
                  setComment(''); // Clear the text box
            } catch (err) {
                  console.error('Error creating interaction:', err); // Log the error
                  setError('Failed to create interaction. Please try again.'); // Set error message
            } finally {
                  setIsLoading(false); // Reset loading state
                  window.location.reload();
            }
      };

      if (loading) {
            return <div>Loading interactions...</div>;
      }

      return (
            <div className="container mt-4">
                  <div className="d-flex justify-content-start">
                        <button className="btn btn-secondary m-1 " onClick={() => navigate(-1)}>
                              Go Back
                        </button>
                  </div>
                  <div className='d-flex justify-content-start'>
                        <div className='light-text lexend-Font text-start'>

                              <h4 >Interactions for Restraunt: {lead.restraunt_name}</h4>
                              <p><strong>Restraunt Address : </strong>{lead.restraunt_address}</p>

                              <div className='row m-3'>
                                    <div className="col-md-5">
                                          <p><strong>Restraunt Point of contact 1 : </strong>{lead.POC1_name}</p>
                                          <p><strong>Phone Number : </strong>{lead.POC1_phone_number}</p>
                                          <p><strong>Email : </strong>{lead.POC1_email}</p>
                                          
                                    </div>
                                    <div className="col-md-5 border-start border-1 h-75 mx-3">

                                          <p><strong>Restraunt Point of contact 2 : </strong>{lead.POC2_name}</p>
                                          <p><strong>Phone Number : </strong>{lead.POC2_phone_number}</p>
                                          <p><strong>Email : </strong>{lead.POC2_email}</p>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {interactions.length === 0 ? (
                        <p>No interactions found for this lead.</p>
                  ) : (
                        <div>
                              <div className="timeline">
                                    {interactions.map((interaction, index) => (
                                          <div key={interaction.id} className="timeline-item row">
                                                <div className="col-1 timeline-icon">
                                                      <div className="timeline-dot"></div>
                                                      {index !== interactions.length && <div className="timeline-line"></div>}
                                                </div>
                                                <div className="col-10">
                                                      <div className="card bkg-tranparent-darker text-start">
                                                            <div className="card-body lexend-Font light-text">
                                                                  {/* <p><strong>Interaction Type:</strong> {interaction.interaction_type}</p> */}
                                                                  <p><strong>Interacted at :</strong> {new Date(interaction.created_at).toLocaleString()}</p>
                                                                  <hr />
                                                                  <p><strong>Interaction Notes:</strong> {interaction.comment}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  )}

                  <div className='timeline'>
                        <div className='timeline-item row'>
                              <div className="col-1 timeline-icon">
                                    <div className='timeline-dot'></div>
                              </div>

                              <div className="col-10">
                                    {/* <h2>Add Interaction for Lead ID: {leadId}</h2> */}
                                    <div className="mb-3 bkg-tranparent-darker">
                                          <div>

                                                <input
                                                      type="text"
                                                      className="form-control custom-textarea border-0 shadow-none rounded-0"
                                                      placeholder="Add interaction"
                                                      aria-label="Add interaction"
                                                      value={comment}
                                                      onChange={(e) => setComment(e.target.value)}
                                                />
                                          </div>
                                          <div className='bg-light d-flex justify-content-end no-border'>

                                                <button
                                                      className="btn btn-primary me-2 mb-2"
                                                      type="button"
                                                      onClick={handleButtonClick}
                                                      disabled={isLoading} // Disable the button while loading
                                                >
                                                      {isLoading ? 'Submitting...' : 'Submit'}
                                                </button>
                                          </div>
                                    </div>
                                    {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                              </div>

                        </div>
                  </div>

            </div>
      );
};

export default Interactions;