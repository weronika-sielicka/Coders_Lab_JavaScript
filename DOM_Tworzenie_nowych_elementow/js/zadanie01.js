/**
 * Created by Jacek on 2016-01-12.
 */

var button = document.querySelector(".button");
var menu = document.querySelector(".menu");
var count = 0;

button.addEventListener("click", function(){
var li = document.createElement("li");
count++;
li.innerText = "W chwili dodania liczba elementów to " + count;
menu.appendChild(li);



})
