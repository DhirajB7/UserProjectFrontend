import React from "react";
import edit from "../assets/ico_edit.svg";
import active from "../assets/ico_active.svg";
import inactive from "../assets/ico_inactive.svg";
import pending from "../assets/ico_pending.svg";

function UserRow(props) {
  //console.log(props.obj._id);
  return (
    <tr>
      <th scope="row">{props.obj.name}</th>
      <td>{props.obj.email}</td>
      <td>{props.obj.role}</td>

      {props.obj.status === "Active" ? (
        <td>
          <img src={active} alt="active" />
          &nbsp; &nbsp;{props.obj.status}
        </td>
      ) : props.obj.status === "Pending" ? (
        <td>
          <img src={pending} alt="pending" />
          &nbsp; &nbsp;{props.obj.status}
        </td>
      ) : (
        <td>
          <img src={inactive} alt="inactive" />
          &nbsp; &nbsp;{props.obj.status}
        </td>
      )}

      <td>
        <img className="sort" src={edit} alt="edit" />
      </td>
    </tr>
  );
}

export default UserRow;
