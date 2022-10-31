"use strict";

$(function () {
    // Do stuff to the DOM
    console.log(".....jquery loaded.....");

    const clickable = document.getElementsByClassName("num");
    const displayContent = $("#display");
    //can create any element tag
    const newDiv = document.createElement("div");
    newDiv.innerText = "i am the new div"
    
    displayContent.append(newDiv);

    //initDisplay();//hoisting situation
    for (let i = 0; i < clickable.length; i++) {
        clickable[i].addEventListener("click", numclick);
        clickable[i].addEventListener("mouseover", numhover);
        //callback -> function
    }
    
    function numhover(event) {
        let y = event.target;
        y.style.color = "white";
    }
    function numclick(event) {
        let x = event.target;
        displayContent[0].innerHTML = x.innerHTML;
        console.log(x.innerHTML);
    }
    
    function initDisplay(params) {
        displayContent[0].innerText = clickable[clickable.length-1].innerText;
    }
    
    initDisplay();//normal situation
    displayContent.append(newDiv);
});
console.log(".....js file loaded.....");


