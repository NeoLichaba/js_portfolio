var brand = document.getElementById("txt1");
var model = document.getElementById("txt2");
var milage = document.getElementById("txt3");
var price = document.getElementById("txt4");
var output = document.getElementById("myCar");

document.getElementById("btn").onclick = displayMyCar;

function displayMyCar(){
 var theBrand = brand.value;
 var theModel = model.value;
 var theMilage = milage.value;
 var thePrice = price.value
 
 output.innerHTML = "This a " + theBrand + " " + theModel +", "+ "with " + theMilage + "KMs going for R" + thePrice + ".";
}