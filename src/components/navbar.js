import React from "react";
import Home from "./home";
import { Link, Switch, Route, NavLink, BrowserRouter } from "react-router-dom";
import LatestJobs from "./fresher_jobs";
import GovtJobs from "./govt_jobs";
function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <ul className="jobs-box">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/fresher-jobs">
              Freshers Jobs
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/govt-jobs">
              Govt Jobs
            </NavLink>
          </li>
          <li>
            <Link to="#">Walkins</Link>
          </li>
          <li>
            <Link to="#">Bank Jobs</Link>
          </li>
          <li>
            <Link to="#">MBA Jobs</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/fresher-jobs">
          <LatestJobs />
        </Route>
        <Route exact path="/govt-jobs">
          <GovtJobs />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;
