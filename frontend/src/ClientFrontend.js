// client/src/FormComponent.js

import React, { useState } from 'react';
import axios from 'axios';
const PORT = process.env.PORT || 3337;

function ClientFrontend(){

  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });



  function handleChange(ev){

    setFormData({
      ...formData,
      [ev.target.name]: ev.target.value
    });

  };// handleChange()


  async function handleSubmit(ev){

    ev.preventDefault();

    try {
      console.log('FORM DATA:', formData);
      await axios.post(`http://localhost:${PORT}/clients/add`, formData);

    } catch (err) {
      console.error('Error submitting data (FRONTEND):', err);
    }
    
  };// handleSubmit()


  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>

      <div>
        <label>Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </div>
      
      <button type="submit">Submit</button>

    </form>
  );

};// ClientFrontend()

export default ClientFrontend;
