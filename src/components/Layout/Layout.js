import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import "../../styles/Layout.css";
import Topbar from "./Topbar/Topbar";
import { useLocation } from "react-router";

export default function Layout({ children, role }) {
  let location = useLocation();

  return (
    <>
      <div className="grid-container">
        <div className="grid-header">
          <Topbar />
        </div>
        <div className="grid-main">
          <div className="grid-sidebar">
            <Sidebar location={location} role={role} />
          </div>
          <div className="grid-main-content">{children}</div>
        </div>
      </div>
    </>
  );
}
