import AddCompanies from './components/AddCompanies';
import { useState, Component } from "react";


function VerifyCompanies() {
    const [adminid, setAdminId] = useState();
    const [status, setStatus] = useState(false);

    function VerifyCompany(e) {
        console.log("Verify company - function called.")
    }
    return (
        <div className='App'>
            <h3>Enter the ID to enter</h3>
            <form onSubmit={VerifyCompany}>
                <label>
                    <h4>Admin entry ID:</h4>
                    <input type="number" name="adminid" value={adminid} onChange={(e) => setAdminId(e.target.value)} />
                </label>
            </form>
        </div>

    );
}

export default VerifyCompanies();