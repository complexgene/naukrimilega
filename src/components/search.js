import React from "react";
import p from "axios";
import "../css/index.css";

class Search extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var payload = {};

    for (let name of data.keys()) {
      const input = form.elements[name];
      console.log("Inp:" + input);
      payload[name] = data.get(name);
      console.log("Val:" + data.get(name));
    }
    console.log("Submit Data:" + JSON.stringify(payload));
    fetch("http://127.0.0.1:18000/v1/search-data/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="search-box">
          <span>Search for Jobs</span>
          <input
            id="keyword"
            type="text"
            name="keywordtext"
            className="search-input"
            placeholder="Keyword"
          />
          <input type="text" className="search-input" placeholder="Location" />
          <select className="search-input-select">
            <option className="option-dummy">Choose Qualification</option>
            <optgroup label="Engineering">
              <option>B.Tech</option>
              <option>M.Tech</option>
            </optgroup>
          </select>
          <select className="search-input-select">
            <option className="option-dummy">Job Type</option>
            <optgroup label="Type of Job">
              <option>Full Time</option>
              <option>Part Time</option>
            </optgroup>
          </select>
          <button value="Submit" className="btn">
            Search
          </button>
          <div className="register-now">
            <span>Not Yet Registered?</span>
            <button className="btn-small">Register Now</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Search;
