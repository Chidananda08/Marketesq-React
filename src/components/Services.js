// src/components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    { name: 'High Speed Internet', description: 'Reliable internet connection for your work.' },
    { name: 'Healthy Meals', description: 'Nutritious meals available for guests.' },
    { name: 'Homely Stay', description: 'Comfortable and peaceful environment.' },
    // Add more services as needed
  ];

  return (
    <div>
      <h3>Services</h3>
      {services.map((service, index) => (
        <div key={index}>
          <h4>{service.name}</h4>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
