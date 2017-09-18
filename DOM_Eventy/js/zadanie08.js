 document.addEventListener("DOMContentLoaded", function(){

var windowHeight = document.getElementById("windowHeight");

var windowWidth = document.getElementById("windowWidth");

windowHeight.innerText = window.innerHeight;
windowWidth.innerText = window.innerWidth;

window.addEventListener("resize",function(){
  windowHeight.innerText = window.innerHeight;
  windowWidth.innerText = window.innerWidth;
})



 });
