import React, { useState } from 'react';
import './JobCreatePage.css';
import { useNavigate } from 'react-router-dom';

const JobCreatePage = ({ addJob }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        jobId: '',
        title: '',
        description: '',
        positionLevel: 'Junior',
        jobType: 'Full-Time',
        location: '',
        salary: '',
        department: '',
        experienceLevel: 'Entry',
        skills: '',
        applicationDeadline: '',
        educationLevel: 'Bachelor’s',
        remoteOption: false,
        additionalInfo: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        addJob(formData); // Add job to the list
        navigate('/jobs'); // Redirect to Job List page
    };

    return (
        <div className="job-create-container">
            <h2 className="header">Create New Job Posting</h2>
            <form onSubmit={handleSubmit} className="job-create-form">
                <div className="form-group">
                    <label htmlFor="jobId" className="label">Job ID</label>
                    <input
                        type="text"
                        name="jobId"
                        id="jobId"
                        value={formData.jobId}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title" className="label">Job Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="positionLevel" className="label">Position Level</label>
                    <select
                        name="positionLevel"
                        id="positionLevel"
                        value={formData.positionLevel}
                        onChange={handleChange}
                        className="select"
                    >
                        <option value="Junior">Junior</option>
                        <option value="Mid-level">Mid-level</option>
                        <option value="Senior">Senior</option>
                        <option value="Lead">Lead</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="label">Job Description</label>
                    <textarea
                        name="description"
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="textarea"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobType" className="label">Job Type</label>
                    <select
                        name="jobType"
                        id="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="select"
                        required
                    >
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="location" className="label">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="salary" className="label">Salary</label>
                    <input
                        type="number"
                        name="salary"
                        id="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        className="input"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="department" className="label">Department</label>
                    <input
                        type="text"
                        name="department"
                        id="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="experienceLevel" className="label">Experience Level</label>
                    <select
                        name="experienceLevel"
                        id="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        className="select"
                    >
                        <option value="Entry">Entry</option>
                        <option value="Mid">Mid</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="skills" className="label">Skills Required</label>
                    <input
                        type="text"
                        name="skills"
                        id="skills"
                        placeholder="e.g., JavaScript, React, Python"
                        value={formData.skills}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="applicationDeadline" className="label">Application Deadline</label>
                    <input
                        type="date"
                        name="applicationDeadline"
                        id="applicationDeadline"
                        value={formData.applicationDeadline}
                        onChange={handleChange}
                        className="input"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="educationLevel" className="label">Education Level</label>
                    <select
                        name="educationLevel"
                        id="educationLevel"
                        value={formData.educationLevel}
                        onChange={handleChange}
                        className="select"
                    >
                        <option value="High School">High School</option>
                        <option value="Associate’s">Associate’s</option>
                        <option value="Bachelor’s">Bachelor’s</option>
                        <option value="Master’s">Master’s</option>
                        <option value="PhD">PhD</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalInfo" className="label">Additional Information</label>
                    <textarea
                        name="additionalInfo"
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        className="textarea"
                        placeholder="Any extra details about the position."
                    />
                </div>
                <button type="submit" className="submit-button">Create Job</button>
            </form>
        </div>
    );
};

export default JobCreatePage;
