import React from "react";
import edit from "../assets/ico_edit.svg";

function UserRow(props) {
  return (
    <tr>
      <th scope="row">name</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <img className="sort" src={edit} alt="edit" />
      </td>
    </tr>
  );
}

export default UserRow;
