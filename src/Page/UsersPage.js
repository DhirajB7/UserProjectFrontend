import React from "react";
import NavBar from "../Components/NavBar";
import UserPageComponent from "../Components/UserPageComponent";

function UsersPage() {
  return (
    <div>
      <NavBar />
      <UserPageComponent /> {/* MAKE THIS I FRAME */}
    </div>
  );
}

export default UsersPage;
