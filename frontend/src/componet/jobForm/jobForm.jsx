import React, { useState } from 'react';
import './JobForm.css';
import Logo from '../Logo';
const JobApplicationForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    noticePeriod: '',
    resume: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.files[0] }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        body: submissionData,
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="container-form">
      <div className="logo">
      <Logo />
      </div>

      <h1>Job Application Form</h1>
      <p>Please fill out the form below to submit your job application!</p>

      <form id="jobApplicationForm" onSubmit={handleSubmit}>
        {/* Name Section */}
        <div className="form-group">
          <label htmlFor="firstName">Name *</label>
          <div className="name-fields">
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Email and Phone Section */}
        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            placeholder="ex: myname@example.com"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            placeholder="(000) 000-0000"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        {/* Position and Notice Period Section */}
        <div className="form-group">
          <label htmlFor="position">Applied Position</label>
          <input
            type="text"
            id="position"
            placeholder="Position"
            value={formData.position}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="noticePeriod">Notice Period</label>
          <input
            type="number"
            id="noticePeriod"
            min="0"
            required
            value={formData.noticePeriod}
            onChange={handleChange}
          />
        </div>

        {/* Resume Upload Section */}
        <div className="form-group">
          <label htmlFor="resume">Upload Resume *</label>
          <input
            type="file"
            id="resume"
            required
            onChange={handleFileChange}
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
