import { baseURL } from "./Properties";

async function PostUser(name, email, role, phone) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: name,
    email: email,
    phone: phone,
    role: role,
    status: "pending",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  await fetch(baseURL + "/user", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      alert(result);
      window.location.reload();
    })
    .catch((error) => console.log("error", error));
}

export default PostUser;
