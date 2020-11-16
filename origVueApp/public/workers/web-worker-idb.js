import { set } from "idb-keyval";

onmessage = (event) => {
  // The object that the web page sent is stored in the event.data property.
  console.log("web worker received the following message: ", event.data);
  saveAllData(event.data);
  postMessage("thank you from web worker!");
};

// this is good here because we can have cardData1, cardData2 etc for multiple cards
async function saveAllData(theData) {
  console.log("this function will async communicate with IDB", theData);
  set("cardData", theData)
    .then(() => console.log("webworker to IDB success!"))
    .catch((err) => console.log("webworker to IDB fail", err));
}
