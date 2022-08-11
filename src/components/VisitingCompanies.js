
import React from 'react';
import axios from 'axios';
import { useState, Component } from "react";

export default class ContactSearch extends React.Component {
  state = {
    id: '',
    contacts: []
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:8080/contact/${this.state.id}`)
      .then(res => {
        const contacts = res.data;
        this.setState({ contacts });
        document.getElementById("cid").innerHTML = "Contact Id----: " + contacts.contactid + " ";
        document.getElementById("cname").innerHTML = "Contact Name: " + contacts.contactname + " ";
        document.getElementById("cmail").innerHTML = "Contact Email: " + contacts.contactemail + " ";
        document.getElementById("phno").innerHTML = "Phone---------: " + contacts.phone;


      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h1>Search contact : </h1>
              <p></p>Contact ID:<br></br>
              <input type="number" name="id" onChange={this.handleChange} />
            </label><br /><br />

            <button type="submit"><h3>Search</h3></button><br /><br /><br />
            <label id="cid"></label><br /><br />
            <label id="cname"></label><br /><br />
            <label id="cmail"></label><br /><br />
            <label id="phno"></label><br /><br />
          </form>
        </header>
      </div>


    )
  }
}