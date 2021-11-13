import React from "react";
import { Link } from "react-router-dom";
import { adminRoutes } from "../../../routes/admin.routes";

import { SidebarContainer, SidebarItem, SidebarMenu } from "./sidebar.styles";

export default function Sidebar({ location, role }) {
  let routes = adminRoutes;

  return (
    <SidebarContainer>
      <SidebarMenu>
        {routes.map((item, i) => (
          <Link to={item.link} key={i}>
            <SidebarItem
              key={i}
              className={item.link === location.pathname ? "active" : ""}
            >
              <i className={item.icon} alt="" />
              <p>{item.name}</p>
            </SidebarItem>
          </Link>
        ))}
      </SidebarMenu>

      <p className="label">Other Informations</p>
      <SidebarMenu>
        <Link to="/">
          <SidebarItem>
            <i className="far fa-question-circle"></i>
            <p>Knowledge Base</p>
          </SidebarItem>
        </Link>
      </SidebarMenu>

      <p className="label">Settings</p>
      <SidebarMenu>
        <Link to="/">
          <SidebarItem>
            <i className="far fa-user"></i>
            <p>Personal Settings</p>
          </SidebarItem>
        </Link>
        <Link to="/">
          <SidebarItem>
            <i className="fas fa-cog"></i>
            <p>Global Settings</p>
          </SidebarItem>
        </Link>
      </SidebarMenu>
    </SidebarContainer>
  );
}
