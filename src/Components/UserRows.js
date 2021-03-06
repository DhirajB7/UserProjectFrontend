import React, { Component } from "react";
import GetAllUsers from "../API/GetAllUsers";
import UserRow from "./UserRow";
import Spinner from "./Spinner";

class UserRows extends Component {
  state = {
    userData: [],
  };

  properDataSorting = () => {
    GetAllUsers().then((a) => {
      let userDataArray = a
        .toString()
        .replace("[", "")
        .replace("]", "")
        .replace(/},/g, "}},")
        .split("},")
        .map((a) => JSON.parse(a));

      this.setState({
        userData: userDataArray,
      });
    });
  };

  componentDidMount() {
    this.properDataSorting();
  }

  render() {
    if (this.state.userData.length > 1) {
      return (
        <React.Fragment>
          {this.state.userData.map((a) => {
            return <UserRow key={a._id} obj={a} />;
          })}
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default UserRows;
