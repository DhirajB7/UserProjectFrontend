import { baseURL } from "./Properties";

function DeleteUser(userId) {
  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
  };

  fetch(baseURL + "/user/" + userId, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      alert(result);
      window.location.reload();
    })
    .catch((error) => console.log("error", error));
}

export default DeleteUser;
