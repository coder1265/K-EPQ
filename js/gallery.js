"use strict";
const images = [
  "Chicken-cage.jpg",
  "Img1.jpg",
  "Img2.jpg",
  "Img3.jpg",
  "Img4.jpg",
  "Img5.jpg",
  "blue-eggs-kitchen.jpg",
  "brown-egg-kitchen.jpg",
  "chicken-in-sunset.jpg",
  "dozen-eggs.jpg",
  "rhubarb.jpg",
  "white-eggs-kitchen.jpg",
  "chicken-profiles/Chicken1.jpg",
  "chicken-profiles/Chicken2.jpg",
  "chicken-profiles/Chicken3.jpg",
  "chicken-profiles/Chicken4.jpg",
  "chicken-profiles/Chicken5.jpg",
  "chicken-profiles/Chicken6.jpg",
  "chicken-profiles/Chicken7.jpg",
  "chicken-profiles/Chicken8.jpg",
  "chicken-profiles/Chicken9.jpg",
  "chicken-profiles/Chicken10.jpg",
  "chicken-profiles/Chicken11.jpg",
  "chicken-profiles/Chicken12.jpg",
  "chicken-profiles/Chicken13.jpg",
  "chicken-profiles/Chicken14.jpg",
  "chicken-profiles/Chicken15.jpg",
  "chicken-profiles/Chicken16.jpg",
  "chicken-profiles/Chicken17.jpg",
];
for (let i = 0; i < images.length; i++) {
  const img = document.createElement("img");
  img.src = `/Images/${images[i]}`;
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
  console.log(`Image: ${img}`);
}
