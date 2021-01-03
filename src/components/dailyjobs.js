import React from "react";
import QuickJobs from "./quick_jobs";
import BannerBoxJobs from "./bannerboxjobs";

function DailyJobs() {
  return (
    <div>
      <div className="allquickjobs">
        <QuickJobs
          className="smallbox_jobs"
          title="Last Date Today!!"
          content="Hello World!!"
        />
        <QuickJobs
          className="smallbox_jobs"
          title="Without Fees!!"
          content="Hello World2!!"
        />
        <QuickJobs
          className="smallbox_jobs"
          title="Technical Exams!!"
          content="Hello World3!!"
        />
        <QuickJobs
          className="smallbox_jobs"
          title="Capgemini"
          content="Capgemini!!"
        />
      </div>

      <BannerBoxJobs
        imageUrl="http://freshersjobs24.com/wp-content/uploads/2017/03/Hetero-Drugs.png"
        title="Hetero Drugs Freshers Walkin | Trainee | 3rd January 2021 | Hyderabad"
        tags="naukrimilega | December 31, 2020 | Freshers Walkins"
        content="Hetero Drugs Freshers Walkin Drive in Hyderabad For Trainee Position On 3rd January 2021. BSc, BCom, BA Freshers are eligible for this walkin drive. More details Hetero Drugs Hyderabad Freshers Walkin"
      />
    </div>
  );
}

export default DailyJobs;
