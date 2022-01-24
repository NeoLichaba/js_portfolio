var textBox = document.getElementById("txtBox");
var output = document.getElementById("txt");

document.getElementById("myBtn").onclick = displayName;
/*document.getElementById("myBtn").addEventListener("click", displayName); */

function displayName(){
var input = textBox.value;
output.innerHTML = "My name is " + input;
}
//This function displays user input in a sentence