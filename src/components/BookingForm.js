// src/components/BookingForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateOrder } from '../features/orderSlice';
import './BookingForm.css';

const BookingForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    rooms: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateOrder(formData));
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2 className="booking-form-title">Book Your Stay</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="checkIn">Check-in</label>
        <input type="date" id="checkIn" name="checkIn" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="checkOut">Check-out</label>
        <input type="date" id="checkOut" name="checkOut" onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="rooms">Rooms</label>
        <input type="number" id="rooms" name="rooms" min="1" value={formData.rooms} onChange={handleChange} />
      </div>
      <button type="submit" className="booking-submit-button">Book Now</button>
    </form>
  );
};

export default BookingForm;
