import React, { useState, useEffect } from 'react';
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

                  console.log('Interaction created:', response.data); // Log the response
                  alert('Interaction created successfully!'); // Notify the user
                  setComment(''); // Clear the text box
            } catch (err) {
                  console.error('Error creating interaction:', err); // Log the error
                  setError('Failed to create interaction. Please try again.'); // Set error message
            } finally {
                  setIsLoading(false); // Reset loading state
            }
      };

      if (loading) {
            return <div>Loading interactions...</div>;
      }

      return (
            <div className="container mt-4">
                  <h2>Interactions for Lead ID: {leadId}</h2>
                  <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                        Go Back
                  </button>
                  {interactions.length === 0 ? (
                        <p>No interactions found for this lead.</p>
                  ) : (
                        <div className="timeline">
                              {interactions.map((interaction, index) => (
                                    <div key={interaction.id} className="timeline-item row">
                                          <div className="col-2 timeline-icon">
                                                <div className="timeline-dot"></div>
                                                {index !== interactions.length - 1 && <div className="timeline-line"></div>}
                                          </div>
                                          <div className="col-10">
                                                <div className="card">
                                                      <div className="card-body">
                                                            {/* <p><strong>Interaction Type:</strong> {interaction.interaction_type}</p> */}
                                                            <p><strong>Date:</strong> {new Date(interaction.created_at).toLocaleDateString()}</p>
                                                            <p><strong>Notes:</strong> {interaction.comment}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  )}

                  <div className="container mt-4">
                        {/* <h2>Add Interaction for Lead ID: {leadId}</h2> */}
                        <div className="input-group mb-3">
                              <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your comment"
                                    aria-label="Enter your comment"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                              />
                              <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={handleButtonClick}
                                    disabled={isLoading} // Disable the button while loading
                              >
                                    {isLoading ? 'Submitting...' : 'Submit'}
                              </button>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>} {/* Display error message */}
                  </div>
            </div>
      );
};

export default Interactions;