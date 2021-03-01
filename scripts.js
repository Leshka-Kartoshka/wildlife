/*Correct markup*/
var sliderLength = document.getElementsByClassName("element").length;
var elementWidth = document.getElementsByClassName("element")[0].offsetWidth;
var step = 0;
/*Slider*/
var elements = document.getElementsByClassName("element");
var slider = document.getElementsByClassName("slider")[0];

var offset = 0;

var changeSize = function(){
    elementWidth = document.getElementsByClassName("element")[0].offsetWidth;
    slider.style.left = -offset + 'px';
    console.log("changed");
}

let timer = setInterval(changeSize, 1000);

var slide = function(dir){
    step++;
    if(dir == "right"){
        offset += elementWidth;
    }
    else if(dir == "left"){
        offset -= elementWidth;
    }
    else{
        offset = 0;
    }
    slider.style.left = -offset + 'px';
}