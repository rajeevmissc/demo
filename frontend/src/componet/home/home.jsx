// LinksPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';
const LinksPage = () => {
    return (
        <div>
            <div style={{margin:'20px'}}>
            <Logo />
            </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1 style={{color:'white'}}>Dashboard</h1>
            <nav style={{ marginTop: '20px' }}>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px', // Space between links
                    listStyleType: 'none',
                    padding: 0
                }}>
                    <li><Link to="/link1">HR Portal</Link></li>
                    <li><Link to="/jobform">Report</Link></li>
                    <li><Link to="/timesheet">Position</Link></li>
                    <li><Link to="/link4">Job Create</Link></li>
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default LinksPage;
