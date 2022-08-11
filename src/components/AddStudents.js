import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function FormPage() {
    const [studentid, setStudentId] = useState();
    const [studentname, setStudentName] = useState();
    const [department, setDepartment] = useState();
    const [yog, setYog] = useState();
    const [status, setStatus] = useState(false);

    function addCompanyApiFunction(e) {

        e.preventDefault();
        let postData = {
            studentid, studentname, department, yog
        }

        console.log("Function called", postData);
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post(`http://localhost:8080/students`, postData)
            .then(res => {
                console.log(res.data);
                setStatus(true);
            })

    }

    return (
        <div className="App">
            <table style={{ width: 1900, border: '1px solid black', backgroundColor: 'white' }}>
                <h9 style={{ color: 'black', fontStyle: 'oblique' }}>Welcome to TnP website. For any information, mail the developer : zephyrbalajr@pec.edu </h9>
            </table>
            <h1>Add Student</h1>
            <h3>Welcome,admin.</h3>
            <form onSubmit={addCompanyApiFunction}>
                <label>
                    <h4>Student ID:</h4>
                    <input type="number" name="studentid" value={studentid} onChange={(e) => setStudentId(e.target.value)} />
                </label>
                <label>
                    <h4>Student Name:</h4>
                    <input type="text" name="studentname" value={studentname} onChange={(e) => setStudentName(e.target.value)} />
                </label>
                <label>
                    <h4>Department:</h4>
                    <input type="text" name="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                </label>
                <label>
                    <h4>Year of Graduation:</h4>
                    <input type="number" name="yog" value={yog} onChange={(e) => setYog(e.target.value)} />
                </label>
                <p></p>
                <br></br>
                <input type="submit" value="Submit" />
               <br></br>
               <br></br>
                <h9 style={{ color: 'black', fontStyle: 'oblique' }}>A project done by Varun Balasubramanian</h9>
            </form>
            {status && <h2 style={{ color: 'black', fontStyle: 'oblique' }}>Student added.</h2>}

        </div>



    );
}

export default FormPage;
