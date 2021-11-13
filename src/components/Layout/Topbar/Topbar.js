import React from "react";
import { TopbarContainer } from "./Topbar.styles";

export default function Topbar() {
  return (
    <TopbarContainer className="topbar">
      <div className="topbar__content">
        <div className="topbar__content--left">
          <img className="logo" src="assets/images/logo.png" alt="logo" />
          <span className="name">University</span>
        </div>

        {/* <div className="topbar__form">
          <div className="topbar__form--input">
            <img className="search" src="assets/icons/search.svg" alt="" />
            <input type="text" placeholder="Search..." />
            <button className="more">
              <img src="./icons/more.png" alt="" />
            </button>
          </div>
        </div> */}

        <div className="topbar__content--right">
          <span className="topbar-icon">
            <button>
              <img src="assets/icons/message.svg" alt="message icon" />
            </button>
          </span>

          <span className="topbar-icon">
            <button>
              <img src="assets/icons/bell.svg" alt="message icon" />
              <span className="indice">1</span>
            </button>
          </span>

          <span className="topbar-icon">
            <button className="user">
              <img
                className="user-avatar"
                src="assets/images/Avatar.png"
                alt="add freind button"
              />
              <p className="user-name">Rahan Bouess</p>
              <i className="fas fa-chevron-down"></i>
            </button>
          </span>
        </div>
      </div>
    </TopbarContainer>
  );
}
