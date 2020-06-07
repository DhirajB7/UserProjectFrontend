import React, { Component } from "react";
import edit from "../assets/ico_edit.svg";
import active from "../assets/ico_active.svg";
import inactive from "../assets/ico_inactive.svg";
import pending from "../assets/ico_pending.svg";
import DeleteUser from "../API/DeleteUser";
import ChangeStatus from "../API/ChangeStatus";

class UserRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditClicked: false,
      newStatus: "",
    };
  }

  editClicked = () => {
    this.setState({
      isEditClicked: true,
    });
  };

  statusChangeActive = () => {
    ChangeStatus(this.props.obj._id, "Active");
  };

  statusChangePending = () => {
    ChangeStatus(this.props.obj._id, "Pending");
  };

  statusChangeInactive = () => {
    ChangeStatus(this.props.obj._id, "Inactive");
  };

  render() {
    return (
      <tr>
        <th scope="row">{this.props.obj.name}</th>
        <td>{this.props.obj.email}</td>
        <td>{this.props.obj.role}</td>

        {this.state.isEditClicked ? (
          <div className="dropdown drpdwn">
            <button
              className="btn btn-info btn-sm dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Status
            </button>
            <div
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton"
            >
              <div
                className="dropdown-item sort"
                onClick={this.statusChangeActive}
              >
                Active
              </div>
              <div
                className="dropdown-item sort"
                onClick={this.statusChangePending}
              >
                Pending
              </div>
              <div
                className="dropdown-item sort"
                onClick={this.statusChangeInactive}
              >
                Inactive
              </div>
            </div>
          </div>
        ) : this.props.obj.status === "Active" ? (
          <td>
            <img src={active} alt="active" />
            &nbsp; &nbsp;{this.props.obj.status}
          </td>
        ) : this.props.obj.status === "Pending" ? (
          <td>
            <img src={pending} alt="pending" />
            &nbsp; &nbsp;{this.props.obj.status}
          </td>
        ) : (
          <td>
            <img src={inactive} alt="inactive" />
            &nbsp; &nbsp;{this.props.obj.status}
          </td>
        )}

        <td>
          <img
            className="sort"
            src={edit}
            alt="edit"
            onClick={this.editClicked}
          />
        </td>

        <td>
          <i
            className="fas fa-trash-alt del"
            onClick={() => {
              let value = window.confirm(
                "Are You sure you want to delete user " +
                  this.props.obj.name +
                  " ? "
              );
              if (value) {
                DeleteUser(this.props.obj._id);
              }
            }}
          />
        </td>
      </tr>
    );
  }
}
export default UserRow;
