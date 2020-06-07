import React, { Component } from "react";
import close from "../assets/ico_close.svg";
import PostUser from "../API/PostUser";

class AddUser extends Component {
  state = {
    name: "",
    email: "",
    isAdim: false,
    isCe: false,
    mobile: "",
  };

  nameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  adminChange = () => {
    this.setState({
      isAdim: true,
      isCe: false,
    });
  };

  ceChange = () => {
    this.setState({
      isCe: true,
      isAdim: false,
    });
  };

  phoneChange = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };

  buttonClicked = () => {
    let role = this.state.isAdim ? "Admin" : "Customer Executive";
    PostUser(this.state.name, this.state.email, role, this.state.phone);
  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} alt="close" />
                </button>

                <div>
                  <p className="h1">Add User</p>

                  <br />

                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.nameChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.emailChange}
                    />
                  </div>

                  <div className="form-check form-check-inline inlineRadio1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      onClick={this.adminChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Admin
                    </label>
                  </div>

                  <div className="form-check form-check-inline inlineRadio2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      onClick={this.ceChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Customer Executive
                    </label>
                  </div>

                  <br />
                  <br />

                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number(Optional)"
                      value={this.state.phone}
                      onChange={this.phoneChange}
                    />
                  </div>

                  <button
                    className="btn btn-outline-warning my-2 my-sm-0 addUser bigButton"
                    onClick={this.buttonClicked}
                  >
                    ADD USER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddUser;
