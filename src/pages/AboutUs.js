import React from "react";
import PageHeading from "../common/PageHeading";
import "./AboutUs.css"; 

const AboutUs = () => {
  return (
    <div>
      <PageHeading home={"home"} pagename={"About Us"} />

      <div className="about-us-container">
        <div className="about-header">
          <h2 className="about-title">About Us</h2>
          <p className="about-description">
            We are a team of passionate individuals committed to providing the best products and services.
            Our goal is to make a positive impact in the lives of our customers and the community.
          </p>
        </div>

        <div className="about-mission">
          <h3 className="about-subtitle">Our Mission</h3>
          <p>
            Our mission is to provide high-quality, durable, and sustainable products that meet the needs of our customers. 
            We are committed to innovation, excellence, and sustainability in everything we do.
          </p>
        </div>

        <div className="about-vision">
          <h3 className="about-subtitle">Our Vision</h3>
          <p>
            Our vision is to become a leading provider of innovative and sustainable solutions, empowering individuals and businesses 
            to achieve their full potential through exceptional products and services.
          </p>
        </div>

        <div className="about-team">
          <h3 className="about-subtitle">Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src="https://c.stocksy.com/a/dTW500/z9/1316485.jpg" alt="Team Member 1" className="team-member-image" />
              <h4>John Doe</h4>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="https://m.foolcdn.com/media/dubs/images/smiling_man_in_business_suit_at_laptop_GettyIma.original.jpg" alt="Team Member 2" className="team-member-image" />
              <h4>Jane Smith</h4>
              <p>Lead Designer</p>
            </div>
            <div className="team-member">
              <img src="https://as2.ftcdn.net/v2/jpg/04/22/82/39/1000_F_422823992_ZtyrE96o6wGTJcyZolZ6pLRUGHBRCH9c.jpg" alt="Team Member 3" className="team-member-image" />
              <h4>Emily Johnson</h4>
              <p>Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
