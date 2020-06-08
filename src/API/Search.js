import { baseURL } from "./Properties";

let arrayData = "";
async function Search(data) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  await fetch(baseURL + "/user/search/" + data, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      arrayData = result;
    })
    .catch((error) => console.log("error", error));

  return arrayData;
}

export default Search;
