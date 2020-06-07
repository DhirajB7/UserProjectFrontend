import React, { Component } from "react";
import uparrow from "../assets/ico_sorting.svg";
import UserRows from "./UserRows";
import UserRowsReverse from "./UserRowsReverse";

class UserTableComponent extends Component {
  state = {
    odr: true,
  };

  sortClicked = () => {
    this.setState({
      odr: !this.state.odr,
    });
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <div className="sort">
                NAME &nbsp;
                <img src={uparrow} alt="sort" onClick={this.sortClicked} />
              </div>
            </th>
            <th scope="col">EMAIL</th>
            <th scope="col">ROLE TYPE</th>
            <th scope="col">STATUS</th>
            <th scope="col"> </th>
            <th scope="col"> </th>
          </tr>
        </thead>
        <tbody>{this.state.odr ? <UserRows /> : <UserRowsReverse />}</tbody>
      </table>
    );
  }
}

export default UserTableComponent;
