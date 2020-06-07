import React from "react";
import edit from "../assets/ico_edit.svg";
import active from "../assets/ico_active.svg";
import inactive from "../assets/ico_inactive.svg";
import pending from "../assets/ico_pending.svg";
import DeleteUser from "../API/DeleteUser";

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

      <td>
        <i
          className="fas fa-trash-alt del"
          onClick={() => {
            let value = window.confirm(
              "Are You sure you want to delete user " + props.obj.name + " ? "
            );
            if (value) {
              DeleteUser(props.obj._id);
            }
          }}
        />
      </td>
    </tr>
  );
}

export default UserRow;
