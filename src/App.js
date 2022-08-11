import './App.css';
import tnplogo from "./components/img/logo.png"
import clglogo from "./components/img/clg-logo.png"
import background from "./components/img/background.jpg"
import axios from 'axios';
import { useState, Component } from "react";

import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
  Link,
} from "react-router-dom";
// import Button from 'react'
import VisitingCompanies from './components/VisitingCompanies';
import AddCompanies from './components/AddCompanies';
import AddStudents from './components/AddStudents';
import ApplyCompany from './components/ApplyCompany';
import StudentDetails from './components/StudentDetails';

function HomePage() {
  const [studentid, setStudentId] = useState("Undefined");
  const [department, setDepartment] = useState("Undefined");
  const [studentName, setStudentName] = useState("Undefined");
  const [yog, setYog] = useState("Undefined");
  const [body, setBody] = useState();
  function callStudents(e) {
    console.log("Function called");
    axios.get(`http://localhost:8080/students`)
      .then(res => {
        console.log(res.data);
        setStudentId(res.data[0].studentid);
        setDepartment(res.data[0].department);
        setStudentName(res.data[0].studentName);
        setYog(res.data[0].yog);
        setBody(res.data);
      })

  }
  function callCompanies(e) {
    console.log("Function called");
    axios.get(`http://localhost:8080/students`)
      .then(res => {
        console.log(res.data);
        setStudentId(res.data[0].studentid);
        setDepartment(res.data[0].department);
        setStudentName(res.data[0].studentName);
        setYog(res.data[0].yog);
        setBody(res.data);
      })

  }


  var heading = ['ID', 'Company Name', 'Job title', 'Salary', 'Vacancies',];

  return (
    <div className="App" styles={{ backgroundImage: `url(${background})` }} >
      <table style={{ width: 1900, border: '1px solid black', backgroundColor: 'white' }}>
        <h9 style={{ color: 'black', fontStyle: 'oblique' }}>Welcome to TnP website. For any information, mail the developer : zephyrbalajr@pec.edu </h9>
      </table>
      <header className="App-header">
        <img src={clglogo} className="clg-logo" alt="" />
        <img src={tnplogo} className="logo" alt="" />
        <h1 style={{ backgroundColor: '#F8FFD7', width: 900, height: 90, fillOpacity: 'initial', borderRadius: 25, color: 'black', opacity: 10, border: '1px solid black' }}>Training and Placement Cell</h1>
        <table style={{ width: 500, border: '1px solid black', borderRadius: 15, backgroundColor: '#F8FFD7' }}>
          <h3 style={{ color: 'black' }}>Students Corner.</h3>
          <Link to="/visitingcompanies">Companies visit : 2022-23 </Link>
          {/* <button onClick={() => callApiFunction()}>View the companies.</button>
          <p></p>
          {body &&
            <div >
              <Table heading={heading} body={body} />
            </div>
          } */}
          <p></p>
          <Link to="/applycompany">Apply for a company</Link>
          <p></p>
        </table>
        <p></p>

        <table style={{ width: 500, border: '1px solid black', borderRadius: 15, backgroundColor: '#F8FFD7' }}>
          <h3 style={{ color: 'black' }}>Companies Joint</h3>
          {/* <Link to="/studentdetails">Student Database</Link> */}
          <button onClick={() => callStudents()}>Students database</button>
          <p></p>
          <p></p>
          {body &&
            <div >
              <Table heading={heading} body={body} />
            </div>
          }
        </table>
        <p></p>
        <table style={{ width: 500, border: '1px solid black', borderRadius: 15, backgroundColor: '#F8FFD7' }}>
          <h3 style={{ color: 'black' }}>Admin Corner</h3>
          <Link to="/addcompany">Add Companies</Link>
          <p></p>
          <Link to="/addstudents">Add Students</Link>
          <p></p>
        </table>
        <p></p>



        <h9 style={{ color: 'black', fontStyle: 'oblique' }}>A project done by Varun Balasubramanian</h9>
        <p></p>

      </header>
    </div>
  );
}

class Table extends Component {
  render() {
    var heading = this.props.heading;
    var body = this.props.body;
    return (
      <table style={{ width: 1000, border: '2px solid black' }}>
        <thead>
          <tr>
            {heading.map(head => <th>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map(row => <TableRow row={row} />)}
        </tbody>
      </table>
    );
  }
}

class TableRow extends Component {
  render() {
    var row = this.props.row;
    console.log(row);
    return (
      <tr>
        <td>{row.studentid}</td>
        <td>{row.department}</td>
        <td>{row.studentName}</td>
        <td>{row.yog}</td>
      </tr>
    )
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visitingcompanies" element={<VisitingCompanies />} />
        <Route path="/addcompany" element={<AddCompanies />} />
        <Route path="/addstudents" element={<AddStudents />} />
        <Route path="/applycompany" element={<ApplyCompany />} />
        <Route path="/studentdetails" element={<StudentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
