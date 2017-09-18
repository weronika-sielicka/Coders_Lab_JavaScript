/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() {
  var homeElement = document.getElementById("home");
  var childElements = document.querySelector(".oferts").children;
  var banner = document.querySelector(".ban");
  var blocks = document.querySelectorAll(".block");
  var links = document.querySelector(".links").children;

  /*
  Poniżej napisz kod rozwiązujący zadania
   */

  //Zadanie z wykładowcą
  console.log(links);

  function getDatasInfo(elements) {
    var newTab = [];

    for (var i = 0; i < elements.length; i++) {
      newTab[i] = elements[i].dataset.color;
    }


    console.log(newTab);
  }

  getDatasInfo(links);

  //Zadanie1
  console.log("");
  console.log("Zadanie1");
  console.log("");

  console.log(homeElement);
  console.log("");

  console.log(childElements);
  console.log("");

  for (var i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
  }
  console.log("");

  console.log(banner);
  console.log("");

  console.log(blocks);
  console.log("");

  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i]);
  }
  console.log("");

  console.log(links);


  //Zadanie 2

  console.log("");
  console.log("Zadanie2");

  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].innerHTML);


  }

  console.log("");


  for (var i = 0; i < blocks.length; i++) {
    blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
    console.log(blocks[i].innerHTML);
  }


  console.log("");

  for (var i = 0; i < blocks.length; i++) {
    console.log(blocks[i].outerHTML);
  }


  //Zadanie3
console.log("");
console.log("Zadanie3");
console.log(" ");

var footer = document.getElementById("mainFooter");

function getId(element){
console.log(element.id);

}

getId(footer);


//Zadanie 4

console.log("");
console.log("Zadanie4");
console.log(" ");

function getTags(elements){
  var newTab = [];

  for (var i = 0; i < elements.length; i++) {
    newTab[i] = elements[i].tagName;
  }


  console.log(newTab);

}

getTags(childElements);

//Zadanie 5

console.log("");
console.log("Zadanie5");
console.log(" ");

function getClassInfo(element){

console.log(element.classList);

///different way:
/*
function getClassInfo(element) {
  var tab = [];
  for(var i = 0; i< element.classList.length; i++) {
    tab[i] = element.classList[i];
  }
  return tab;
  //return element.classList;

}
console.log(getClassInfo(banner)); */

}

getClassInfo(banner);


//Zadanie6


console.log("");
console.log("Zadanie6");
console.log(" ");

var navLi = document.querySelectorAll("nav li");
console.log(navLi);

console.log(" ");


  function setDataDirection(elements){
    for(var i = 0; i<elements.length; i++){
        if(!elements[i].hasAttribute("data-direction")) {
            elements[i].dataset.direction = "top";
        }
    }
  }
  setDataDirection(navLi);






});
