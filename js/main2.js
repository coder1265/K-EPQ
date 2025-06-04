"use strict";
console.log("console works");
document.addEventListener("DOMContentLoaded", ()=> {
	
	

//	code for the main image carrocel
	let mainImages = ["Images/Img1.jpg","Images/Img2.jpg","Images/Img5.jpg","Images/Img4.webp"];
	let currentImage = (mainImages.length-1);
	function isActive(n){
		document.getElementById("mainImage0").classList.remove("active");
		document.getElementById("mainImage1").classList.remove("active");
		document.getElementById("mainImage2").classList.remove("active");
		document.getElementById("mainImage3").classList.remove("active");
		switch (n){
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
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[0]})`;
		isActive(0);
	});
	document.getElementById("mainImage1").addEventListener("mousedown", () => {
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[1]})`;
		isActive(1);
	});
	document.getElementById("mainImage2").addEventListener("mousedown", () => {
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[2]})`;
		isActive(2);
	});
	document.getElementById("mainImage3").addEventListener("mousedown", () => {
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[3]})`;
		isActive(3);
	});
	
	document.getElementById("leftImage").addEventListener("click", () => {
		if(currentImage > 0){
			currentImage--;
		}else if(currentImage === 0){
			currentImage = (mainImages.length-1);
		}
		isActive(currentImage);
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[currentImage]})`;
	})
	document.getElementById("rightImage").addEventListener("mousedown", () => {
		if(currentImage < (mainImages.length-1)){
			currentImage++;
		}else if(currentImage === (mainImages.length-1)){
			currentImage = 0;
		}
		isActive(currentImage);
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[currentImage]})`;
	})
	
	function changeImage(){
		if(currentImage < (mainImages.length-1)){
			currentImage++;
		}else if(currentImage === (mainImages.length-1)){
			currentImage = 0;
		}
		isActive(currentImage);
		document.getElementById("main-image").style.backgroundImage = `url(${mainImages[currentImage]})`;
	}
	setInterval(changeImage,10000);
	document.getElementById("easterEgg1").addEventListener("click", function () {
		let ans = prompt("please enter code:")
		if(ans === "Eggy"){
			let ans2 = confirm("Eggcelent")
			if(!ans2){
				window.location.replace("2048.html");
			}
		}
	})
	
	let acc = document.getElementsByClassName("accordion"); // array of all the accordions
	// the following function iterates through the array just above and adds to each element an event listener
	// with a generic function
	for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var panel = this.nextElementSibling; // need to understand "this" better.
	let childSymbol = this.children
    if (panel.style.display === "block") {
	    panel.style.display = "none";
		if(childSymbol.length == 1){
			childSymbol[0].innerHTML ="+"
		}
    } else {
	    panel.style.display = "block";
		if(childSymbol.length == 1){
			childSymbol[0].innerHTML ="-"
		}
    }
  });
}

	});