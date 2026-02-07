"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //	code for the main image carrocel
  let mainImages = [
    "Images/Img1.jpg",
    "Images/Img2.jpg",
    "Images/Img5.jpg",
    "Images/Img4.webp",
  ];
  let currentImage = mainImages.length - 1;
  let pauseAutoRotate = false;
  function isActive(n) {
    document.getElementById("mainImage0").classList.remove("active");
    document.getElementById("mainImage1").classList.remove("active");
    document.getElementById("mainImage2").classList.remove("active");
    document.getElementById("mainImage3").classList.remove("active");
    switch (n) {
      case 0:
        document.getElementById("mainImage0").classList.add("active");
        break;
      case 1:
        document.getElementById("mainImage1").classList.add("active");
        break;
      case 2:
        document.getElementById("mainImage2").classList.add("active");
        break;
      case 3:
        document.getElementById("mainImage3").classList.add("active");
        break;
      default:
        alert("error in image change");
    }
  }
  document.getElementById("mainImage0").addEventListener("mousedown", () => {
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[0]})`;
    isActive(0);
  });
  document.getElementById("mainImage1").addEventListener("mousedown", () => {
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[1]})`;
    isActive(1);
  });
  document.getElementById("mainImage2").addEventListener("mousedown", () => {
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[2]})`;
    isActive(2);
  });
  document.getElementById("mainImage3").addEventListener("mousedown", () => {
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[3]})`;
    isActive(3);
  });
  // left and right buttons for the main image
  document.getElementById("leftImage").addEventListener("click", () => {
    if (currentImage > 0) {
      currentImage--;
    } else if (currentImage === 0) {
      currentImage = mainImages.length - 1;
    }
    isActive(currentImage);
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[currentImage]})`;
  });
  document.getElementById("rightImage").addEventListener("mousedown", () => {
    if (currentImage < mainImages.length - 1) {
      currentImage++;
    } else if (currentImage === mainImages.length - 1) {
      currentImage = 0;
    }
    isActive(currentImage);
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[currentImage]})`;
  });

  // Pause automatic rotation while pointer is over left/right controls
  const leftBtn = document.getElementById("leftImage");
  const rightBtn = document.getElementById("rightImage");
  if (leftBtn) {
    leftBtn.addEventListener("pointerenter", () => (pauseAutoRotate = true));
    leftBtn.addEventListener("pointerleave", () => (pauseAutoRotate = false));
    leftBtn.addEventListener("focus", () => (pauseAutoRotate = true));
    leftBtn.addEventListener("blur", () => (pauseAutoRotate = false));
  }
  if (rightBtn) {
    rightBtn.addEventListener("pointerenter", () => (pauseAutoRotate = true));
    rightBtn.addEventListener("pointerleave", () => (pauseAutoRotate = false));
    rightBtn.addEventListener("focus", () => (pauseAutoRotate = true));
    rightBtn.addEventListener("blur", () => (pauseAutoRotate = false));
  }

  function changeImage() {
    if (pauseAutoRotate) return;
    if (currentImage < mainImages.length - 1) {
      currentImage++;
    } else if (currentImage === mainImages.length - 1) {
      currentImage = 0;
    }
    isActive(currentImage);
    document.getElementById("main-image").style.backgroundImage =
      `url(${mainImages[currentImage]})`;
  }
  
  setInterval(changeImage, 10000);
  document.getElementById("easterEgg1").addEventListener("click", function () {
    let ans = prompt("please enter code:");
    if (ans === "Eggy") {
      let ans2 = confirm("Eggcelent");
      if (!ans2) {
        window.location.replace("2048.html");
      }
    }
  });

  let acc = document.getElementsByClassName("accordion"); // array of all the accordions
  // the following function iterates through the array just above and adds to each element an event listener
  // with a generic function
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("open");
      var panel = this.nextElementSibling; // need to understand "this" better.
      let childSymbol = this.children;
      if (panel.style.display === "block") {
        panel.style.display = "none";
        if (childSymbol.length == 1) {
          childSymbol[0].innerHTML = "+";
        }
      } else {
        panel.style.display = "block";
        if (childSymbol.length == 1) {
          childSymbol[0].innerHTML = "-";
        }
      }
    });
  }
  const newsLinks = document.querySelectorAll(
    "#news1-link, #news2-link, #news3-link",
  );
  newsLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      sessionStorage.setItem("getUrl", this.getAttribute("href"));
      window.location.href = "blog.html";
    });
  });
});
