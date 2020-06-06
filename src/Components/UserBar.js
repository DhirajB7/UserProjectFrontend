import React from "react";
import users from "../assets/ico_users.svg";
import add from "../assets/ico_add.svg";
import search from "../assets/ico_search.svg";
import AddUser from "./AddUser";

function UserBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-white bg-white">
      <div className="navbar-brand Users">
        <img src={users} alt="users" /> Users
      </div>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto"></ul>
        <div className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />

          <img className="searchIcon" src={search} alt="search" />

          <button className="btn btn-outline-warning my-2 my-sm-0 addUser">
            <img src={add} alt="add" /> Add User
          </button>
        </div>
      </div>
    </nav>
  );
}

export default UserBar;
