import React, { useState } from "react";
import PageHeading from "../common/PageHeading";
import "./ContactUs.css"; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div>
      <PageHeading home={"home"} pagename={"Contact Us"} />
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-lg">
            We'd love to hear from you! Feel free to reach out to us using the
            form below or the contact information provided.
          </p>
        </div>

      
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="contact-details">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <div className="contact-info">
            <p><strong>Email:</strong> support@yourwebsite.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p><strong>Address:</strong> 123 Furniture Street, City, Country</p>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default ContactUs;
