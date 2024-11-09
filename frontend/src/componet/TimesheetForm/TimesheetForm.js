// TimesheetForm.js
import React, { useState, useEffect } from 'react';
import TimesheetRow from './TimesheetRow';
import './TimesheetForm.css';
import Logo from '../Logo';

const TimesheetForm = ({ employees, managers, currentEmployee, currentManager }) => {
    const [rows, setRows] = useState([{ id: Date.now(), date: '', hours: 0 }]);
    const [errorMessage, setErrorMessage] = useState('');

    const addRow = () => {
        setRows([...rows, { id: Date.now(), date: '', hours: 0 }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    const handleInputChange = (id, name, value) => {
        setRows(rows.map(row => (row.id === id ? { ...row, [name]: value } : row)));
    };

    const validateForm = () => {
        const dateHoursMap = {};
        let valid = true;

        rows.forEach(row => {
            const { date, hours } = row;
            dateHoursMap[date] = (dateHoursMap[date] || 0) + parseFloat(hours || 0);
        });

        for (const date in dateHoursMap) {
            if (dateHoursMap[date] < 8) {
                valid = false;
                setErrorMessage('Total hours for each date must be at least 8. Please correct the errors and try again.');
                break;
            }
        }

        if (valid) setErrorMessage('');
        return valid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log('Submitting form', rows);
        }
    };

    useEffect(() => {
        const setDateLimits = () => {
            const today = new Date();
            // Set date min-max based on your logic
        };
        setDateLimits();
    }, []);

    return (
        <div className="timesheet-container">
            <Logo />
            <h2 className="timesheet-heading">ATS Sheet</h2>
            <form onSubmit={handleSubmit}>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Department</th>
                                <th>Source</th>
                                <th>Source detail</th>
                                <th>CV Received date</th>
                                <th>Qualification</th>
                                <th>Years of Experience</th>
                                <th>Area worked in-Audit/Accounting/IT</th>
                                <th>Current Company</th>
                                <th>Mobile No.</th>
                                <th>Alternative contact information</th>
                                <th>Email id</th>
                                <th>Shortlisted</th>
                                <th>Screening done by</th>
                                <th>Remarks for shortlisting</th>
                                <th>CTC(Fixed + Variable)</th>
                                <th>ECTC</th>
                                <th>Remarks on CTC/ECTC</th>
                                <th>Notice Period (Official)</th>
                                <th>Remarks on NP</th>
                                <th>Reason for Change</th>
                                <th>Current Location</th>
                                <th>Open for Relocation</th>
                                <th>Calling Status</th>
                                <th>Called by</th>
                                <th>Calling Date</th>
                                <th>Calling Outcome</th>
                                <th>Remarks - Status</th>
                                <th>Interview date</th>
                                <th>Interview time</th>
                                <th>Teams/ office</th>
                                <th>Remarks - Teams interview</th>
                                <th>Invites sent</th>
                                <th>HR Round taken by</th>
                                <th>Interview Outcome HR Round</th>
                                <th>Interview HR Date</th>
                                <th>Remarks - HR Round Outcome</th>
                                <th>Technical 1 Round taken by</th>
                                <th>Technical 1 Interview Date</th>
                                <th>Interview Outcome Technical 1 Round</th>
                                <th>Remarks - Technical 1 Round</th>
                                <th>Technical 2 Round taken by</th>
                                <th>Technical 2 Interview Date</th>
                                <th>Interview Outcome Technical 2 Round</th>
                                <th>Remarks - Technical 2 Round</th>
                                <th>Meet and greet Round by - Person 1</th>
                                <th>Meet and greet Round by - Person 2</th>
                                <th>Interview Outcome Meet and greet Round</th>
                                <th>Meet and Greet Interview date</th>
                                <th>Remarks - Meet and greet Round</th>
                                <th>COP Round Outcome</th>
                                <th>Remarks - COP Round</th>
                                <th>CEO Round Outcome</th>
                                <th>Remarks - CEO Round</th>
                                <th>Final outcome date</th>
                                <th>Final Outcome</th>
                                <th>Position given</th>
                                <th>CTC offered (LPA)</th>
                                <th>Joining Bonus amount (LPA)</th>
                                <th>Bond</th>
                                <th>Bond Period</th>
                                <th>KYC Documents</th>
                                <th>Offer Letter Shared</th>
                                <th>Offer Letter Accepted</th>
                                <th>Remarks on offer letter</th>
                                <th>Previous experience documents</th>
                                <th>Joining Date</th>
                                <th>Extension date</th>
                                <th>Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <TimesheetRow
                                    key={row.id}
                                    row={row}
                                    rowIndex={index + 1}
                                    employees={employees}
                                    managers={managers}
                                    currentEmployee={currentEmployee}
                                    currentManager={currentManager}
                                    onDelete={() => deleteRow(row.id)}
                                    onChange={handleInputChange}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="btn-container">
                    <button type="button" onClick={addRow}>Add Row</button>
                    <button type="submit">Submit</button>
                </div>
                {errorMessage && <div id="error-message">{errorMessage}</div>}
            </form>
        </div>
    );
};

export default TimesheetForm;
