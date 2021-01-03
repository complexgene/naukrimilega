import React, { useEffect, useState } from "react";
import p from "axios";

import "../css/fresherjobs.css";

function FreshersJobs() {
  const [fresherJobs, setFresherJobs] = useState([]);
  useEffect(() => {
    const fresherJobsUrl = "http://127.0.0.1:18000/v1/jobs/freshers";
    async function fetchFresherJobs() {
      const k = await p.get(fresherJobsUrl, { timeout: 10000 });
      console.log(k.data);
      setFresherJobs(k.data);
    }
    return fetchFresherJobs();
  }, [setFresherJobs]);
  return <div className="freshersjobs_all">{JSON.stringify(fresherJobs)}</div>;
}

export default FreshersJobs;
