import React from "react";
import logo from "../assets/Logo.svg";
import dashboard from "../assets/ico_dashboard.svg";
import users_nav from "../assets/ico_users_nav.svg";
import sessionmanager from "../assets/ico_sessionmanager.svg";
import notification from "../assets/ico_notification.svg";
import user from "../assets/ico_user.svg";
import downarrow from "../assets/ico_downarrow.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo comes here" />
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src={dashboard} alt="dashboard comes here" />
              <span className="white"> Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/">
              <img src={users_nav} alt="user comes here" />
              <span className="orange"> User</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              <img src={sessionmanager} alt="sessionmanager comes here" />
              <span className="white"> Session Manager</span>
            </a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <img
            className="nav-item sort"
            src={notification}
            alt="notification"
          />
          <div className="nav-item">
            <img src={user} alt="user" />
            &nbsp;<span className="white"> John Smith</span>
          </div>
          <img className="nav-item sort" src={downarrow} alt="downarrow" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
