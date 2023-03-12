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