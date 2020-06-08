import React, { Component } from "react";
import UserTableComponent from "./UserTableComponent";
import UserBar from "./UserBar";
import Search from "../API/Search";

class UserPageComponent extends Component {
  state = {
    didSearchHappen: false,
    sw: "",
  };

  getData = (data) => {
    Search(data).then((a) => {
      if (a.includes("}]")) {
        this.setState({
          didSearchHappen: true,
          sw: data,
        });
      } else {
        alert("No Search Result, Change Search String");
      }
    });
  };

  render() {
    return (
      <div>
        <UserBar sendData={this.getData} />
        <UserTableComponent
          search={this.state.didSearchHappen}
          searchWord={this.state.sw}
        />
      </div>
    );
  }
}

export default UserPageComponent;
