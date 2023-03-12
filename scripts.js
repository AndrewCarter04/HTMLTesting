/* 
Copyright (c) 2023 Andrew Carter. All rights reserved. 
*/

function submitButton1() {

    var div = document.getElementById("divTesting1");
    var text = div.querySelector("#text1").value;
    
    var outputText = div.querySelector("#outputText1");

    outputText.innerHTML += text;

    div.querySelector("#text1").value = "";

}

function submitButton2() {

    var div = document.getElementById("divTesting1");
    var imgURL = div.querySelector("#text2").value;
    var img = div.querySelector("#outputImg2");

    img.setAttribute("src", imgURL);

}

function submitButton3() {

    var div = document.getElementById("divTesting1");
    var img = div.querySelector("#outputImg3");

    img.setAttribute("src", div.querySelector("#outputImg2").getAttribute("src"));
    img.setAttribute("width", div.querySelector("#num3-1").value);
    img.setAttribute("height", div.querySelector("#num3-2").value);

}