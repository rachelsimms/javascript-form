// JavaScript Document

//By: Rachel Simms (Broadbent)

// if user enters input area - background turn light blue
var input = document.getElementByTagName(“input”);
input.addEventListener(“focus”, chgColor());

function chgColor(){
    input.style.backgroundColor = “#000000”;
}
//if user enters into textarea - background turn light blue
var message = document.getElementById(“message);



// if user has empty fields - background turn red

function subForm (e) {
    if (input.value === null || message.value === null) {
	        e.target.style.backgroundColor = "red";
    } else {
        alert('Thank you for submitting your form.')
    }
}