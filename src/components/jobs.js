import React from "react";

function JobsBox() {
  return (
    <div className="anchor">
      <div>
        <ul className="jobs-box">
          <li>
            <a href="#">Latest Jobs</a>
          </li>
          |
          <li>
            <a href="#">Freshers Jobs</a>
          </li>
          |
          <li>
            <a href="#">Govt Jobs</a>
          </li>
          |
          <li>
            <a href="#">Walkins</a>
          </li>
          |
          <li>
            <a href="#">Bank Jobs</a>
          </li>
          |
          <li>
            <a href="#">MBA Jobs</a>
          </li>
        </ul>
      </div>
      <div className="hide">Hey Man</div>
    </div>
  );
}

export default JobsBox;
