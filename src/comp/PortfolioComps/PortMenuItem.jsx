import React from "react";

function PortMenuItem(props) {
  return (
    <div>
      <li>
        <a
          href={"#" + props.section}
          className="portfolio-menu-item"
          id={props.idName}
        >
          {props.section}
        </a>
      </li>
    </div>
  );
}

export default PortMenuItem;
