import React from "react";
import UserTableComponent from "./UserTableComponent";
import UserBar from "./UserBar";

function UserPageComponent() {
  return (
    <div>
      <UserBar />
      <UserTableComponent />
    </div>
  );
}

export default UserPageComponent;
