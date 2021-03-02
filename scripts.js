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
    
    if(dir == "right"){
        step++;
        offset += elementWidth;
    }
    else if(dir == "left"){
        step--;
        offset -= elementWidth;
    }
    else{
        offset = 0;
    }
    if(document.getElementsByClassName("container")[0].offsetWidth >= 767 && step == 2){
        
    }
    else if(document.getElementsByClassName("container")[0].offsetWidth >= 767 && step == -1){
        step = 1;
        offset = elementWidth;
    }
    if(document.getElementsByClassName("container")[0].offsetWidth <= 766 && step == 3){
        step = 0;
        offset = 0;
    }
    else if(document.getElementsByClassName("container")[0].offsetWidth <= 766 && step == -1){
        step = 2;
        offset = 2 * elementWidth;
    }
    slider.style.left = -offset + 'px';
}