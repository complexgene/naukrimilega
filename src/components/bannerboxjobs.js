import React, { useEffect, useState } from "react";
import p from "axios";
import BannerBoxJob from "./bannerboxjob";

function BannerBoxJobs() {
  const [bannerBoxJobs, setBannerBoxJobs] = useState([]);

  useEffect(() => {
    const apiURL = "http://127.0.0.1:18000/v1/jobs/data";
    (async () => {
      const bannerJobs = await p.get(apiURL, { timeout: 10000 });
      console.log(JSON.stringify(bannerJobs.data));
      setBannerBoxJobs(bannerJobs.data);
    })();
  }, []);
  return (
    <div className="bannerboxjobs__all">
      {bannerBoxJobs.map((item) => {
        console.log("Item->" + JSON.stringify(item));
        return <BannerBoxJob item={item} />;
      })}
    </div>
  );
}

export default BannerBoxJobs;
