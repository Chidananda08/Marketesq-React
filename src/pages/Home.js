import React from 'react';
import BookingForm from '../components/BookingForm';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';

const Home = () => {
  return (
    <div>
      <section className="hero">
        <h1>Work from Ladakh</h1>
        <p>India’s first true digital tourism ecosystem</p>
        <BookingForm />
      </section>

      <section id="discover">
        <h2>Discover</h2>
        <Testimonials />
      </section>

      <section id="services">
        <h2>Services</h2>
        <Services />
      </section>
    </div>
  );
};

export default Home;
