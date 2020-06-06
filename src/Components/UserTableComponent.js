import React from "react";
import uparrow from "../assets/ico_sorting.svg";
import UserRows from "./UserRows";

function UserTableComponent() {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <div className="sort">
              NAME &nbsp;
              <img src={uparrow} alt="sort" />
            </div>
          </th>
          <th scope="col">EMAIL</th>
          <th scope="col">ROLE TYPE</th>
          <th scope="col">STATUS</th>
          <th scope="col"> </th>
        </tr>
      </thead>
      <tbody>
        <UserRows />
      </tbody>
    </table>
  );
}

export default UserTableComponent;
