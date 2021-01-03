import React from "react";
import "../css/boxjobs.css";

function QuickJobs({ title, content }) {
  return (
    <div className="quickjobs">
      <div className="quickjobs_title">{title}</div>
      <div className="quickjobs_content">{content}</div>
    </div>
  );
}

export default QuickJobs;
