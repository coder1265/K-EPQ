"use strict";
window.addEventListener("DOMContentLoaded",()=>{
	document.getElementById("resource-list").style.display = "none";
//	code for the navigation bar resources
	document.getElementById("navResources").addEventListener("mousedown",function showMoreNav(){
		if(document.getElementById("resource-list").style.display == "none"){
			document.getElementById("resource-list").style.display = "block";
			document.getElementById("resouceArrow").innerHTML = "▲";
		} else{
			document.getElementById("resource-list").style.display = "none";
			document.getElementById("resouceArrow").innerHTML = "▼";
		}
	});


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
      quickContactElement.style.display = "none";
    }
  } else {
    if (quickContactElement) {
      quickContactElement.style.display = "inline-flex";
    }
  }
}
	setInterval(checkTop,100);
	function checkTop() {
	if (window.scrollY > 50) {
		    quickContactElement.style.display = "none";
	  } else {
			quickContactElement.style.display = "inline-flex";
	  }
	}
  function sidenav(){
    
  }

});