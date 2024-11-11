import React from 'react';
import './JobListPage.css';

const JobListPage = ({ jobs }) => {
    return (
        <div className="job-list-container">
            <h2 className="header">Job Listings</h2>
            {jobs.length === 0 ? (
                <p>No jobs created yet.</p>
            ) : (
                jobs.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3>{job.title}</h3>
                        <p><strong>Position Level:</strong> {job.positionLevel}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Salary:</strong> ${job.salary}</p>
                        <p><strong>Job Type:</strong> {job.jobType}</p>
                        <p><strong>Job ID:</strong> {job.jobId}</p>
                        <p><strong>Application Deadline:</strong> {job.applicationDeadline}</p>
                        <p><strong>Education Level:</strong> {job.educationLevel}</p>
                        <p><strong>Skills:</strong> {job.skills}</p>
                        <p><strong>Remote Option:</strong> {job.remoteOption ? 'Yes' : 'No'}</p>
                        <p><strong>Experience Level:</strong> {job.experienceLevel}</p>
                        <div className="job-description">
                            <p>{job.description}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default JobListPage;
