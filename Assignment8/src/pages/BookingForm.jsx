import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Data ko state ke sath Success page par bhej rahe hain
    navigate('/success', { state: formData });
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Fill Your Details</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="text" placeholder="Enter Name" required 
          onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Enter Email" required 
          onChange={(e) => setFormData({...formData, email: e.target.value})} />
        <input type="tel" placeholder="Enter Mobile" required 
          onChange={(e) => setFormData({...formData, mobile: e.target.value})} />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'green', color: 'white' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookingForm;