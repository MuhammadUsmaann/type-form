import React from "react";
import Discover from "./discover";
import Integrationsidebar from "./sidebar";
import "../apps & integration/apps&integration.css"
const AppsIntegration = () => {
  return (
    <div id="appintegration">
      <div className="d-flex align-items-start myapp">
        <Integrationsidebar />
        <Discover />
      </div>
    </div>
  );
};

export default AppsIntegration;
