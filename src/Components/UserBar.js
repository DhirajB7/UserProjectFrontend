import React, { Component } from "react";
import users from "../assets/ico_users.svg";
import add from "../assets/ico_add.svg";
import search from "../assets/ico_search.svg";
import AddUser from "./AddUser";

class UserBar extends Component {
  state = {
    searchText: "",
  };

  searchChanged = (event) => {
    this.setState({
      searchText: event.target.value,
    });
  };

  searchClicked = () => {
    if (this.state.searchText.trim().length > 0) {
      this.props.sendData(this.state.searchText);
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
          <div className="navbar-brand ">
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
                value={this.state.searchText}
                onChange={this.searchChanged}
              />

              <img
                className="searchIcon"
                src={search}
                alt="search"
                onClick={this.searchClicked}
              />

              <button
                className="btn btn-outline-warning my-2 my-sm-0 addUser"
                data-toggle="modal"
                data-target="#exampleModalCenter"
              >
                <img src={add} alt="add" /> Add User
              </button>
            </div>
          </div>
        </nav>

        <AddUser />
      </React.Fragment>
    );
  }
}
export default UserBar;
