import React, {useState} from 'react';
import axios from 'axios';

const RegisterLeadForm = () =>{
      const [formData ,setFormData] =useState({
            restraunt_name : '',
            restraunt_address :'',
            POC1_name:'',
            POC1_phone_number : '',
            POC1_email :'',
            POC1_role : 'manager',
            POC2_name:'',
            POC2_phone_number : '',
            POC2_email :'',
            POC2_role : 'owner',
            call_frequency : 2,
            status:'new',
      });

      const handleChange =(e)=>{
            const  {name , value} = e.target;
            setFormData({...formData , [name] : value});
      }

      const handleSubmit = async(e) =>{
            e.preventDefault();
            try{
                  const response = await axios.post('http://localhost:5000/api/leads' , formData);
                  alert(response.data.message);
            }catch(error){
                  console.log(error);
                  alert('Error registering lead :' ,error);
            }
      };

      return (
            <form onSubmit={handleSubmit}>
                <h2>Register New Lead</h2>
                <label>
                    Restaurant Name:
                    <input type="text" name="restraunt_name" value={formData.restraunt_name} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                <label>
                    Restaurant Address:
                    <input type="text" name="restraunt_address" value={formData.restraunt_address} onChange={handleChange} required />
                </label>
                <br></br>
                <br></br>
                <h3>Point of Contact 1</h3>
                <label>
                    Name:
                    <input type="text" name="POC1_name" value={formData.POC1_name} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Phone Number:
                    <input type="text" name="POC1_phone_number" value={formData.POC1_phone_number} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Email:
                    <input type="email" name="POC1_email" value={formData.POC1_email} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Role:
                    <select name="POC1_role" value={formData.POC1_role} onChange={handleChange}>
                        <option value="manager">Manager</option>
                        <option value="owner">Owner</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <h3>Point of Contact 2</h3>
                <label>
                    Name:
                    <input type="text" name="POC2_name" value={formData.POC2_name} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Phone Number:
                    <input type="text" name="POC2_phone_number" value={formData.POC2_phone_number} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Email:
                    <input type="email" name="POC2_email" value={formData.POC2_email} onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <label>
                    Role:
                    <select name="POC2_role" value={formData.POC2_role} onChange={handleChange}>
                        <option value="manager">Manager</option>
                        <option value="owner">Owner</option>
                    </select>
                </label>
                <br></br>
                <br></br>
                <label>
                    Call Frequency (per week):
                    <input type="number" name="call_frequency" value={formData.call_frequency} onChange={handleChange} min="1" />
                </label>
                <br />
                <br />
                <label>
                    Status:
                    <select name="status" value={formData.status} onChange={handleChange}>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="discussion">Discussion</option>
                        <option value="closed">Closed</option>
                    </select>
                </label>
                <br />
                <br />
                <button type="submit">Register Lead</button>
            </form>
        );

}

export default RegisterLeadForm;