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

  function sidenav() {
    console.log("sidenav has been clicked");
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
  });
  document.getElementById("reject-cookies").addEventListener("click", () => {
    closeCookieModal();
  });
});
