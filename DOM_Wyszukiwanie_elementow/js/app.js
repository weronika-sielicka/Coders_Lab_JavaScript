document.addEventListener("DOMContentLoaded", function() {


var title = document.getElementsByClassName("title")[0];

/*
var a = document.getElementsByTagName("a");
for (var i = 0; i < array.length; i++){
  console.log(array[i]); //wypisuję wszystkie elementy a
                        //(bo są w tablicy i muszę wypisać wszystkie elementy z tablicy)
} */

function getDataAnimation(element) {
  console.log(element);
  console.log(element.dataset);

  }

getDataAnimation(title);


//Zadanie 1

var home1 = document.getElementById("home");
console.log(home1);

var home2 = document.querySelector("#home");
console.log(home2);

var firstBlock= document.getElementsByClassName("block")[0];
console.log(firstBlock);

var liNotDirection = document.querySelector("li:not([data-direction])");
console.log(liNotDirection);

var lis = document.getElementsByTagName('li');
for(var i = 0; i <  lis.length; i++) {
  if( lis[i].dataset.direction == null ) {
    console.log(lis[i]);
    break;
  }
}



//Zadanie 2

var navLis = document.querySelectorAll("nav li");
var divParagraphs = document.querySelectorAll("div p");
var articleDiv = document.querySelectorAll("article div");

console.log(navLis);
console.log(navLis.length);
console.log(divParagraphs);
console.log(divParagraphs.length);
console.log(articleDiv);
console.log(articleDiv.length);

//Zadanie 3

var firstArticle = document.querySelector("article.first");
console.log(firstArticle);

var articleH2s = document.querySelectorAll("article h2");
console.log(articleH2s.length);

var articleOferts = document.querySelectorAll("article .oferts");

console.log("");

var oferts = firstArticle.querySelectorAll(".oferts");
for (var i = 0; i < oferts.length; i++){
  console.log(oferts[i].tagName);
}

var divs = firstArticle.querySelectorAll("div");
for (var i = 0; i < divs.length; i++){
  console.log(divs[i].className);
}



















});
