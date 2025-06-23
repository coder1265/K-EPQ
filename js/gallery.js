"use strict";
const images = [
  "Chicken-cage.jpg",
  "Img1.jpg",
  "Img2.jpg",
  "Img3.jpg",
  "Img4.jpg",
  "Img4.webp2",
  "Img5.jpg",
  "blue-eggs-kitchen.jpg",
  "brown-egg-kitchen.jpg",
  "chicken-in-sunset.jpg",
  "dozen-eggs.jpg",
  "rhubarb.jpg",
  "white-eggs-kitchen.jpg",
];
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = `images/${images[i]}`;
  img.alt = images[i];
  img.classList.add("gallery-image");
  img.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
  document.getElementById("gallery").appendChild(img);
}
