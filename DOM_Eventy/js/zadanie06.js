/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {

var box= document.getElementById("box");

var globalX =document.getElementById("globalX");
var globalY =document.getElementById("globalY");
var localX =document.getElementById("localX");
var localY =document.getElementById("localY");

box.addEventListener("mousemove", function(e){

globalX.innerText = e.screenX;
globalY.innerText = e.screenY;
localX.innerText = e.clientX - box.offsetLeft;
localY.innerText= e.clientY - box.offsetTop;


})

 });
