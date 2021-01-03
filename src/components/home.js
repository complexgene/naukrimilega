import React from "react";
import Search from "./search";
import DailyJobs from "./dailyjobs";

function Home() {
  return (
    <div className="top-info">
      <div className="top-info-bar">
        <DailyJobs />
      </div>
      <Search />
    </div>
  );
}

export default Home;
