window.onload = function() {

var clear = document.querySelector(".clear");
var ops = document.querySelectorAll(".operator");
var equals = document.querySelector(".equals")
var total = "";
var operator = [];
var display = document.querySelector(".screen");
console.log("display:", display);
var int = document.querySelectorAll(".int");
var numArray = [];
var final = "";


for (i=0; i < int.length; i++) {

  int[i].addEventListener("click", function(event) {
    numArray.push(event.target.innerHTML);
    display.innerHTML = numArray.join("");
  })
}


equals.addEventListener("click", function(event) {

  for (i = 0; i<numArray.length; i++) {
      total += numArray[i];
  }
      final = eval(total);
      display.innerHTML = final;
      console.log(final);
})

  clear.addEventListener("click", function(event) {
    if(event) {
      numArray = [" "];
      display.innerHTML = numArray;
    }

  })

}
