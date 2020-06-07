import { baseURL } from "./Properties";

function ChangeStatus(id, status) {
  console.log(id);
  console.log(status);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ status: status });

  var requestOptions = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(baseURL + "/user/status/" + id, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      window.location.reload();
    })
    .catch((error) => console.log("error", error));
}

export default ChangeStatus;
