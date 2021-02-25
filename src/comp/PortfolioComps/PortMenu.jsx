import React from "react";
import PortMenuItem from "./PortMenuItem";

function PortMenu() {
  return (
    <div className="top-nav">
      <div className="logo logo-rb">
        emir<span>aksoy</span>
        <span className="pn">/portfolio</span>
      </div>
      <div className="portfolio-menu">
        <ul>
          <PortMenuItem section="stills" idName="portfolio-stills" />
          <PortMenuItem section="animations" idName="portfolio-animations" />
        </ul>
      </div>
    </div>
  );
}

export default PortMenu;
