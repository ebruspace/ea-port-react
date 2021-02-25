import React from "react";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <nav id="menu">
      <ul>
        <SidebarItem icon="fas fa-home" path="/" />
        <SidebarItem icon="fas fa-paper-plane" path="/storyboard" />
        <SidebarItem icon="fas fa-paper-plane" path="/cv" />
        <SidebarItem icon="fas fa-paper-plane" path="/contact" />
      </ul>
    </nav>
  );
}

export default Sidebar;
