// Write your JS codes here

var elSiteHeader = document.querySelector(".js-header")
var elDarkMode = elSiteHeader.querySelector(".js-btn")
var elBody = document.querySelector(".js-body")

elDarkMode.addEventListener("click", function(){

  console.log("btn bosildi");

  elSiteHeader.classList.add("dark-mode");
  
  
});

elDarkMode.addEventListener("click", function() {
  if (elBody.classList.contains("dark-mode")) {
      elBody.classList.remove("dark-mode");  // Remove dark mode
  } else {
      elBody.classList.add("dark-mode");  // Add dark mode
  }
});