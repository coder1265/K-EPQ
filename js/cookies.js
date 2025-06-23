"use strict";
// the defer attribute in the script tag ensures that the script runs after the DOM is fully loaded
document.getElementById("set-cookie").addEventListener("click", () => {
  const date = new Date();
  date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000); // Convert days to milliseconds
  const expires = "expires=" + date.toUTCString();
  let value = document.getElementById("cookie-input").value;
  let bakedCookie = `cookieExample=${value}; ${expires}; path=/`;
  document.cookie = bakedCookie;
  console.log("Cookie set:", bakedCookie);
  console.log("Current cookies:", document.cookie);
  document.getElementById("demo-text").innerHTML = bakedCookie.valueOf();
});

// check cookies every second
setInterval(() => {
  let cookieJar = document.cookie.split("; ");
  let cookieValue = "";
  for (let i = 0; i < cookieJar.length; i++) {
    let cookie = cookieJar[i].split("=");
    if (cookie[0] === "cookieExample") {
      cookieValue = cookie[1];
      break;
    }
  }
  if (cookieValue) {
    document.getElementById("demo-text").innerHTML = cookieValue;
  } else {
    document.getElementById("demo-text").innerHTML = "No cookie found.";
  }
}, 1000);
