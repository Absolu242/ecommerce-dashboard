import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import { useLocation } from "react-router";
import { useState } from "react";
import styled from "styled-components";

const LayoutContainer = styled.div`
  .grid-container {
    width: 100%;
    position: relative;
    color: #131523;
  }
  .grid-main {
    position: relative;
    display: grid;
    width: 100%;
    grid-template-columns: 255px 1fr;
    gap: 10px;
    min-height: 100vh;
    padding-top: 5rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      .grid-main-content {
        grid-column-start: 1;
      }
    }
  }

  .grid-main-content {
    position: relative;
    grid-column-start: 2;
    width: 100%;
    padding: 4.5rem 3rem;
  }
`;

export default function Layout({ children, role }) {
  let location = useLocation();

  const [isClicked, setIsClicked] = useState(false);

  return (
    <LayoutContainer>
      <div className="grid-container">
        <div className="grid-header">
          <Topbar setIsClicked={setIsClicked} />
        </div>
        <div className="grid-main">
          <Sidebar location={location} role={role} isClicked={isClicked} />

          <div className="grid-main-content">{children}</div>
        </div>
      </div>
    </LayoutContainer>
  );
}
