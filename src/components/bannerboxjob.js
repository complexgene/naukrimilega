import React from "react";
import "../css/boxjobs.css";

function BannerBoxJob({ item }) {
  return (
    <div className="bannerboxjob_main">
      <img
        className="bannerboxjob_logo"
        src={item.companyLogoUrl}
        alt="Company Logo"
      />
      <div className="bannerboxjob__content">
        <div className="bannerboxjob__content_title">{item.title}</div>
        <div className="bannerboxjob__content_tags">{item.tags}</div>
        <div className="bannerboxjob__content_desc">{item.description}</div>
      </div>
    </div>
  );
}

export default BannerBoxJob;
