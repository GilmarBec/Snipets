// ==UserScript==
// @name         Background Black Moodle
// @namespace    https://moodle.ufsc.br/*
// @version      0.1
// @description  Set the background of some instances of moodle to #333.
// @author       Gilmar Bec
// @match        https://moodle.ufsc.br/*
// @grant        none
// ==/UserScript==

function handleSelectorAll(cssClass, style, value){
    var blocks = document.querySelectorAll(cssClass);

    for(var i = 0; i < blocks.length; i++){
        blocks[i].style[style] = value;
    }
}

(function() {
    var bodyStyle = document.body.style;

    bodyStyle.backgroundColor = "#333";
    bodyStyle.color = "#fff";

    var summaryTd = document.querySelector(".summary td");

    if(summaryTd) {
        summaryTd.style.backgroundColor = "#333"
    }

    handleSelectorAll(".block", "backgroundColor", "#333");
    handleSelectorAll(".current", "backgroundColor", "#333");
    handleSelectorAll(".breadcrumb", "backgroundColor", "#1e1a2d");
    handleSelectorAll(".breadcrumb li", "textShadow", "none");
})();
