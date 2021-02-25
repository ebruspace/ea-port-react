import React from "react";
import { Link } from "react-router-dom";

function SidebarIcon(props) {
  return (
    <div>
      <li className="menu-item">
        <button>
          <Link to={props.path}>
            <i className={props.icon}></i>
          </Link>
        </button>
      </li>
    </div>
  );
}

export default SidebarIcon;
