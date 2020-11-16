const endpointURL = "https://reqres.in/api/users";

onmessage = (event) => {
  //console.log(event.data);
  var dataReceived = event.data;
  postData(endpointURL, dataReceived)
    .then((data) => {
      // postMessage goes back to ui thread
      postMessage("sent");
    })
    .catch((error) => {
      console.error("DOH! ", error);
    });
};

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
