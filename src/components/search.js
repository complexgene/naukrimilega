import React, { useState } from "react";
import p from "axios";
import "../css/index.css";

function Search() {
  const [books, setBooks] = useState(null);

  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const fetchData = async () => {
    const res = await p
      .get(apiURL, { timeout: 10000 })
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-box">
      <span>Search for Jobs</span>
      <input
        id="keyword"
        type="text"
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
      <button className="btn" onClick={fetchData}>
        Search
      </button>
      <div className="register-now">
        <span>Not Yet Registered?</span>
        <button className="btn-small">Register Now</button>
      </div>
    </div>
  );
}

export default Search;
