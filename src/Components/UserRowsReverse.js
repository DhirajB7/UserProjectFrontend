import React, { Component } from "react";
import UserRow from "./UserRow";
import Spinner from "./Spinner";
import GetAllUsersDec from "../API/GetAllUsersDec";

class UserRowsReverse extends Component {
  state = {
    userData: [],
  };

  reverseDataSorting = () => {
    GetAllUsersDec().then((a) => {
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
    this.reverseDataSorting();
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

export default UserRowsReverse;
