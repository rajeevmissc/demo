// App.js
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TimesheetForm from "./componet/TimesheetForm/TimesheetForm";
import JobFORM from "./componet/jobForm/jobForm";
import Dashboard from "./componet/home/home";
import Login from "./componet/Authentiction/login/LoginPage";
import Register from "./componet/Authentiction/register/Register";
import JobCreatePage from './componet/JobCreate/JobCreatePage';
import JobListPage from "./componet/JobCreate/JobListPage";
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
    const [jobs, setJobs] = useState([]); // State to store jobs

    // Function to add a new job to the jobs list
    const addJob = (newJob) => {
        setJobs([...jobs, newJob]);
    };
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Register />} />
                    <Route path="/login" element={<Login />}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path="/jobcreate" element={<JobCreatePage addJob={addJob} />} />
                    <Route path="/jobs" element={<JobListPage jobs={jobs} />} />
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
