import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function FormPage() {
  const [companyid, setCompanyId] = useState();
  const [companyname, setCompanyName] = useState();
  const [salary, setsalary] = useState();
  const [jobtitle, setJobTitle] = useState();
  const [vacancies, setVacancies] = useState();
  const [status, setStatus] = useState(false);

  function addCompanyApiFunction(e) {

    e.preventDefault();
    let postData = {
      companyid, companyname, salary, jobtitle, vacancies
    }

    console.log("Function called", postData);
    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(`http://localhost:8080/companies`, postData)
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
      <h1>Add Company</h1>
      <h3>Welcome,admin.</h3>
      <form onSubmit={addCompanyApiFunction}>
        <label>
          <h4>Company ID:</h4>
          <input type="number" name="companyid" value={companyid} onChange={(e) => setCompanyId(e.target.value)} />
        </label>
        <label>
          <h4>Company Name:</h4>
          <input type="text" name="companyname" value={companyname} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <label>
          <h4>Salary:</h4>
          <input type="number" name="salary" value={salary} onChange={(e) => setsalary(e.target.value)} />
        </label>
        <label>
          <h4>Job Title:</h4>
          <input type="text" name="jobtitle" value={jobtitle} onChange={(e) => setJobTitle(e.target.value)} />
        </label>
        <label>
          <h4>Vacancies:</h4>
          <input type="number" name="vacancies" value={vacancies} onChange={(e) => setVacancies(e.target.value)} />
        </label>
        <p></p>
        <input type="submit" value="Submit" />
        <h3>Make sure to verify in <Link to="/visitingCompanies">this link</Link> after submitting the form.</h3>
        <h9 style={{ color: 'black', fontStyle: 'oblique' }}>A project done by Varun Balasubramanian</h9>

      </form>
      {status && <h2 style={{ color: 'black', fontStyle: 'oblique' }}>Company added.</h2>}


    </div>



  );
}

export default FormPage;
