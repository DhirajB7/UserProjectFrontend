import React, { Component } from "react";
import UserRow from "./UserRow";
import Spinner from "./Spinner";
import Search from "../API/Search";

class UserRowsSearch extends Component {
  state = {
    userData: [],
  };
  properDataSorting = () => {
    Search(this.props.word).then((a) => {
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
    if (this.state.userData.length > 0) {
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

export default UserRowsSearch;
