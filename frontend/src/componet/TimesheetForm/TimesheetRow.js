// TimesheetRow.js
import React,{useState} from 'react';

const TimesheetRow = ({ row, employees, managers, currentEmployee, currentManager, onDelete, onChange }) => {
    const [isShortlisted, setIsShortlisted] = useState(row.shortlisted || "");
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChange(row.id, name, value);

        // Update isShortlisted if the "shortlisted" field changes
        if (name === "shortlisted") {
            setIsShortlisted(value);
        }
    };

    return (
        <tr>
            <td>{row.id}</td>
            <td>
                <input name="employeeName" onChange={handleInputChange} required />
            </td>
            <td>
                <input type="text" name="position" onChange={handleInputChange} required />          
            </td>
            <td>
                {/* <input type="text" name="department" onChange={handleInputChange} required /> */}
            <select name="position"  onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option value="Yes">IT Advisory</option>
                    <option value="No">Audit</option>
                    <option value="No">Accounting</option>
                </select>
            </td>
            <td>
                {/* <input type="text" name="source" onChange={handleInputChange} required /> */}
            <select name="source"  onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option value="Yes">Linkedin</option>
                    <option value="No">Referral</option>
                    <option value="No">Carrier Page</option>
                    <option value="No">Job Portal</option>
                    <option value="No">Other</option>
                </select>
            </td>
            <td><input type="text" name="sourceDetail" onChange={handleInputChange} required /></td>
            <td><input type="date" name="cvReceivedDate" onChange={handleInputChange} required /></td>
            <td><input type="text" name="qualification" onChange={handleInputChange} required /></td>
            <td><input type="number" name="experienceYears" onChange={handleInputChange} required /></td>
            <td><input type="text" name="workArea" onChange={handleInputChange} required /></td>
            <td><input type="text" name="currentCompany" onChange={handleInputChange} required /></td>
            <td><input type="tel" name="mobileNo" onChange={handleInputChange} required /></td>
            <td><input type="tel" name="altContactInfo" onChange={handleInputChange} /></td>
            <td><input type="email" name="emailId" onChange={handleInputChange} required /></td>
            <td>
                <select name="shortlisted" value={isShortlisted} onChange={handleInputChange} required>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
            <td><input type="text" name="screeningBy" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksShortlisting" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="ctc" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="ectc" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksCtcEctc" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="noticePeriod" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksNp" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="reasonChange" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="currentLocation" onChange={handleInputChange} required disabled={isShortlisted === "No"}/></td>
            <td>
                <select name="relocationOpen" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
            <td> 
                <select name="callingStatus" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Called">Called</option>
                    <option value="Not Called">Not Called</option>
                    <option value="Called">Rejected</option>
                    <option value="Not Called">Pending</option>
                    <option value="Not Called">Not Show</option>
                </select>
            </td>
            <td><input type="text" name="calledBy" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="callingDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="callingOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td>
                {/* <textarea name="remarksStatus" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/> */}
                <select name="callingStatus" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Called">Rejected</option>
                    <option value="Not Called">InterView Scheduled</option>
                    <option value="Called">InterView to be Scheduled</option>
                    <option value="Not Called">On Hold</option>
                    <option value="Not Called">Not Show</option>
                </select>
            </td>

            <td><input type="date" name="interviewDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="time" name="interviewTime" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="teamsOffice" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksTeams" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td>
                <select name="inviteSent" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </td>
            <td><input type="text" name="hrRoundBy" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="hrOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="hrDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksHrOutcome" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="tech1RoundBy" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="tech1Date" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="tech1Outcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksTech1" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="tech2RoundBy" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="tech2Date" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="tech2Outcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksTech2" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="meetAndGreet1" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="meetAndGreet2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="meetAndGreetOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="meetAndGreetDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksMeetGreet" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="copOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksCop" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="ceoOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarksCeo" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="finalOutcomeDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="finalOutcome" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="positionGiven" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="ctcOffered" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="joiningBonus" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="bond" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="text" name="bondPeriod" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="kycDocs" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td>
                <select name="offerLetterShared" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Pending">Pending</option>
                </select>
            </td>
            <td>
                <select name="offerLetterAccepted" onChange={handleInputChange} required disabled={isShortlisted === "No"}>
                    <option value="">Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    <option value="Pending">Pending</option>
                </select>
            </td>
            <td><textarea name="remarksOfferLetter" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="previousExpDocs" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="joiningDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><input type="date" name="extensionDate" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
            <td><textarea name="remarks" rows="2" onChange={handleInputChange} disabled={isShortlisted === "No"}/></td>
        </tr>
    );
};

export default TimesheetRow;
