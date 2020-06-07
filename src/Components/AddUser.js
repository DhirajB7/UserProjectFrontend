import React from "react";
import close from "../assets/ico_close.svg";

function AddUser() {
  return (
    <div>
      {/* Modal */}
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
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="form-check form-check-inline inlineRadio1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Admin"
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
                    value="Customer Executive"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Customer Executive
                  </label>
                </div>

                <br />
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile Number(Optional)"
                  />
                </div>

                <button className="btn btn-outline-warning my-2 my-sm-0 addUser bigButton">
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

export default AddUser;
