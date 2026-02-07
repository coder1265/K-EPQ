"use strict";

window.addEventListener("DOMContentLoaded", () => {
  let isThrottled = false;
  const throttleDelay = 100; // scroll interval

  window.addEventListener("scroll", (event) => {
    if (!isThrottled) {
      isThrottled = true;
      // Execute your scroll handling logic here
      contactScrolledBy();
      // After the delay, allow the function to be executed again
      setTimeout(() => {
        isThrottled = false;
      }, throttleDelay);
    }
    // If isThrottled is true, the scroll event is ignored until the timeout finishes
  });

  const quickContactElement = document.getElementById("quick-contact");
  function contactScrolledBy() {
    if (window.scrollY > 50) {
      if (quickContactElement) {
        quickContactElement.classList.add("animate1");
      }
    } else {
      if (quickContactElement) {
        quickContactElement.classList.remove("animate1");
        quickContactElement.style.setProperty("opacity", "1");
        quickContactElement.style.display = "inline-flex";
      }
    }
  }
  setInterval(checkTop, 100);

  function checkTop() {
    if (window.scrollY > 50) {
      quickContactElement.classList.add("animate1");
    } else {
      quickContactElement.classList.remove("animate1");
      quickContactElement.style.setProperty("opacity", "1");
      quickContactElement.style.display = "inline-flex";
    }
  }

  document.getElementById("navMenu").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("animation2-close");
    document.getElementById("sidebar").classList.add("animation2");
  });
  document.getElementById("closeSidebar").addEventListener("click", () => {
    document.getElementById("sidebar").classList.remove("animation2");
    document.getElementById("sidebar").classList.add("animation2-close");
  });

  document.getElementById("cookie-container").addEventListener("click", () => {
    console.log("Cookie container / icon has been clicked");
    document.getElementById("cookie-modal").style.visibility = "visible";
    document.getElementById("cookie-modal").style.display = "flex";
  });
  function closeCookieModal() {
    document.getElementById("cookie-modal").style.display = "none";
    document.getElementById("cookie-modal").style.visibility = "hidden";
  }
  document
    .getElementById("close-cookie-modal")
    .addEventListener("click", closeCookieModal);
  document.getElementById("accept-cookies").addEventListener("click", () => {
    closeCookieModal();
    setCookie("cookie-consent", "accepted", 30); // Set cookie for 30 days
  });
  document.getElementById("reject-cookies").addEventListener("click", () => {
    closeCookieModal();
    setCookie("cookie-consent", "rejected", 30); // Set cookie for 30 days
  });
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  // c stands for cookie
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let carray = decodedCookie.split(";");
    for (let i = 0; i < carray.length; i++) {
      let c = carray[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function checkCookieAcceptance(cname) {
    let cookieToCheck = getCookie(cname);
    if (cookieToCheck != "") {
      console.log(`cookie found: ${cookieToCheck}`);
    } else {
      document.getElementById("cookie-modal").style.visibility = "visible";
      document.getElementById("cookie-modal").style.display = "flex";
    }
  }
  checkCookieAcceptance("cookie-consent");

  // Konami code: Up, Up, Down, Down, Left, Right, Left, Right
  let pressedKeys = [];
  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowUp") pressedKeys.push("ArrowUp");
    if (event.key === "ArrowDown") pressedKeys.push("ArrowDown");
    if (event.key === "ArrowLeft") pressedKeys.push("ArrowLeft");
    if (event.key === "ArrowRight") {
      pressedKeys.push("ArrowRight");
      let lastEightKeys = pressedKeys.slice(-8);
      if (
        JSON.stringify(lastEightKeys) ===
        JSON.stringify([
          "ArrowUp",
          "ArrowUp",
          "ArrowDown",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "ArrowLeft",
          "ArrowRight",
        ])
      ) {
        alert("Konami code entered!");
        pressedKeys = [];
      }
    }
  });
});
