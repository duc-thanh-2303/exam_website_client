// import mongoose from 'mongoose';
import React, { useState } from 'react';
import axios from 'axios';

const FormDetails = ({ projectId }) => {
  console.log(projectId)
  const [formData, setFormData] = useState({
    point: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post(`/home/overview/${projectId}`, formData);
        alert('Feedback submitted successfully');
    } catch (error) {
        console.error('Error submitting feedback:', error);
        alert('Error submitting feedback');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="radio" id="point" name="point" value="5" onChange={handleChange} />
      <label htmlFor="point">5</label><br />
      <input type="radio" id="point" name="point" value="6" onChange={handleChange} />
      <label htmlFor="point">6</label><br />
      <input type="radio" id="point" name="point" value="7" onChange={handleChange} />
      <label htmlFor="point">7</label><br />
      <input type="radio" id="point" name="point" value="8" onChange={handleChange} />
      <label htmlFor="point">8</label><br />
      <input type="radio" id="point" name="point" value="9" onChange={handleChange} />
      <label htmlFor="point">9</label><br />
      <input type="radio" id="point" name="point" value="10" onChange={handleChange} />
      <label htmlFor="point">10</label><br />
      <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Comment" value={formData.comment} onChange={handleChange}></textarea>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormDetails
