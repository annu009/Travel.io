import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        At Travel.io, we help you explore the best travel experiences according to your preferences. Whether you're looking for an adventure, a relaxing getaway, or the perfect place to stay, we have options tailored just for you.
      </p>

      <div className="services-sections">
        {/* Exploration Options */}
        <section className="service-section">
          <h2>Exploration</h2>
          <p>Choose from various activities like hiking, city tours, adventure sports, cultural experiences, and more.</p>
          <ul>
            <li>Guided City Tours</li>
            <li>Adventure Sports Packages</li>
            <li>Cultural Experience Programs</li>
            <li>Wildlife Safaris</li>
            <li>Beach and Water Activities</li>
          </ul>
        </section>

        {/* Accommodation Options */}
        <section className="service-section">
          <h2>Accommodation</h2>
          <p>We provide a wide range of accommodation options to suit your needs, from luxury hotels to budget-friendly stays.</p>
          <ul>
            <li>Luxury Hotels</li>
            <li>Budget-Friendly Hostels</li>
            <li>Beach Resorts</li>
            <li>Eco-Friendly Lodges</li>
            <li>Home Rentals</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Services;
