/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){

//Zadanie z wykładowcą

/*  inny sposób na wybranie li
var ex5 = document.querySelector(".ex5 ul").children;

for (var i = 0; i < ex5.length; i++){
  console.log(ex5[i]);

} */


var lis = document.querySelectorAll('.ex5 ul li');
for (var i = 0; i < lis.length; i++) {
/*   if(lis[i].dataset.direction == null){
    lis[i].dataset.direction = "up";
  } inny sposób */

 if(!lis[i].hasAttribute("data-direction")){
   lis[i].setAttribute("data-direction","up");
 }

 if(i%2!==0){
   lis[i].style.backgroundColor = "green";
 }

 if(i%3==0){
   lis[i].style.textDecoration = "line-through";
 }

 }

lis[4].classList.add("big");

//Zadanie1
console.log("");
console.log("Zadanie1");
console.log("");

var ex1 = document.querySelector('.exercise.ex1').children;

//console.log(ex1[1].children[1]);
ex1[1].children[1].style.width = "100px";

var images = [ "", "url('assets/img/chrome.png')", "url('assets/img/edge.png')", "url('assets/img/firefox.png')"];
var links = [ "", "https://www.google.pl/chrome/browser/desktop/index.html", "https://www.microsoft.com/pl-pl/windows/microsoft-edge", "https://www.mozilla.org/en-US/firefox/"];

for(var i = 1; i < ex1.length; i++) {
  ex1[i].children[1].style.backgroundImage = images[i];
  ex1[i].children[2].setAttribute('href', links[i]);
  ex1[i].children[2].innerText = ex1[i].children[0].innerText;
}

//Zadanie2
console.log("");
console.log("Zadanie2");
console.log("");

var name= document.getElementById("name");
var color= document.getElementById("fav_color");
var meal= document.getElementById("fav_meal");

name.innerHTML = "Weronika";
color.innerHTML = "pink";
meal.innerHTML = "cookie";

console.log(name);
console.log(color);
console.log(meal);

//Zadanie3
console.log("");
console.log("Zadanie3");
console.log("");

var menu = document.querySelectorAll(".exercise.ex3 ul");
menu.classList.add("menu");
var menuLis = menu.children;
for(var i = 1; i < menuLis.length; i++){
  menuLis[i].classList.add("menuElement");
  menuLis[i].classList.remove("error");
}

//Zadanie4
console.log("");
console.log("Zadanie4");
console.log("");

var data = document.querySelectorAll(".exercise.ex4 ul li");
for(var i = 0; i < data.length; i++){
  //data[i].dataset.id = i+1;
 data[i].setAttribute("data-id", i+1);
}

//Zadanie5
console.log("");
console.log("Zadanie5");
console.log("");








});
