// in both method i have used api without key

// 1) using await
async function fetchingUsingAwait() {
  try {
    //making https request to api
    const response = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    // coverting to json fomat
    const data = await response.json();
    // log data to console
    console.log(data);
  } catch (e) {
    //   error handling
    console.error(e);
  }
}

fetchingUsingAwait();
// async function which use await for pausing the execution followed by try for making request and catch for error handling

// 2) using .then and .catch

function fetchingUsingThen_Catch() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.error(e);
    });
}

fetchingUsingThen_Catch();

// this is not more readable and maintenance friendly but have same logic and have promises to be resolved or throw an error .
