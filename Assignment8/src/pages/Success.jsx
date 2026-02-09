import React from 'react';
import { useLocation } from 'react-router-dom';

function Success() {
  const location = useLocation();
  const { name, email, mobile } = location.state || {};
  const bookingId = Math.floor(Math.random() * 1000000); // Random ID generator

  return (
    <div style={{ padding: '20px', textAlign: 'center', border: '2px solid green' }}>
      <h1>🎉 Seat Booked Successfully!</h1>
      <p><strong>Booking ID:</strong> {bookingId}</p>
      <hr />
      <h3>User Details:</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Mobile:</strong> {mobile}</p>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );
}

export default Success;