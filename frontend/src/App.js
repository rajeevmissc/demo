// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TimesheetForm from "./componet/TimesheetForm/TimesheetForm";
import JobFORM from "./componet/jobForm/jobForm";
import Dashboard from "./componet/home/home";
import Login from "./componet/Authentiction/login/LoginPage";
import Register from "./componet/Authentiction/register/Register";

const employees = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more employees as needed
];

const managers = [
    { id: 1, name: 'Manager A' },
    { id: 2, name: 'Manager B' },
    // Add more managers as needed
];

function App() {
    const currentEmployee = employees[0]; // Set the current logged-in employee
    const currentManager = managers[0]; // Set the current manager

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route
                        path="/timesheet"
                        element={
                            <TimesheetForm
                                employees={employees}
                                managers={managers}
                                currentEmployee={currentEmployee}
                                currentManager={currentManager}
                            />
                        }
                    />
                    <Route path="/jobform" element={<JobFORM />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
