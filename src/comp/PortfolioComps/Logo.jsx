import React from "react";

function Logo(props) {
  return (
    <div className="top-nav">
      <div className="logo logo-rb">
        emir<span>aksoy</span>
        <span className="pn">/{props.pageName}</span>
      </div>
    </div>
  );
}

export default Logo;
