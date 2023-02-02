var first = document.querySelector(".container");
var second = document.querySelector(".thank-you");
var subm = document.getElementById("sub");
var rate = document.querySelector(".rating");
var button = document.querySelectorAll(".btn");

for(var i = 0; i < button.length; i++){
  button[i].addEventListener("click", function(){
    for(var i = 0; i < button.length; i++){
      button[i].style.backgroundColor = "hsl(216, 12%, 54%)";
    }
    rate.innerHTML = "You selected " + this.innerHTML  + " out of 5";
    this.style.backgroundColor = "hsl(25, 97%, 53%)";

  })
}

subm.addEventListener("click", function(){
  second.classList.remove("hidden");
  first.style.display = "none";

})
  
