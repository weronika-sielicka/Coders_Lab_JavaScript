
String.prototype.upperLower = function() {
  var text = "";
  var a = 0;
  for (var i = 0; i < this.length; i++) {
    if (this.charAt(i) == " ") {
      i++;
      text += " ";
      a++;   //Zadanie domowe - jak się pozbyć tej zmiennej
    }

    if ((i+a) % 2!== 0) {
      text += this.charAt(i).toUpperCase();
    } else {
      text += this.charAt(i).toLowerCase();
    }
  }
  return text;
}


//Zadanie 1

console.log("Zadanie1");

var book = {
title: "Mary Queen of Scots",
author: "Alison Weir",
numberOfPages: 600,

}

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);


//Zadanie 2

console.log("Zadanie2");

var person = {
name: "Weronika",
age: 20,
sayHello: function() {
  console.log(this.name + " Hello");
}
};

person.sayHello();

///zad 2 wersja Grześka
var person = new Object();
person.name = "Tadeusz";
person.age = 25;
person.sayHello = function(){
  console.log(this.name + " mowi!");
}
person.sayHello();


var person2 = {
  name: "Tad",
  age: 33,
  sayHello: function() {
      console.log(this.name + " mowi i mowi!");
  }
};
person2.sayHello();

//Zadanie 3
console.log("Zadanie3");
var train = new Object();
console.log(train instanceof Object);

//Zadanie4 i Zadanie 5
/*

console.log("Zadanie4");

function Car(brand, color, numberOfKilometers) {
  this.brand = brand;
  this.color = color;
  this.numberOfKilometers =  numberOfKilometers || 0;
  this.printCarinfo = function() {
    console.log(this.color+" "+this.brand+", "+this.numberOfKilometers+"km");
  }

  this.drive = function(km) {
    this.numberOfKilometers += km;
  }
this.inspections = [];
this.addInspection = function(insp) {
  this.inspections.push(insp);
};
this.showInspections = function(){
  console.log("Daty przeglądów: " + this.inspections);
}
}

var myCar = new Car("honda", "silver");
myCar.printCarinfo();
myCar.drive(50);
myCar.printCarinfo();
myCar.drive(250);
myCar.printCarinfo();

var myMerc = new Car("Mercedes", "Black", 1500);
myMerc.printCarinfo();
myMerc.drive(20);
myMerc.printCarinfo();

myMerc.addInspection("02.05.2008");
myCar.addInspection("02.06.2008");
myMerc.addInspection("04.11.2011");
myMerc.addInspection("24.09.2013");
myCar.addInspection("02.01.2014");
myMerc.showInspections();
myCar.showInspections();


//Druga wersja, z prototypami

Car.prototype.printCarinfo = function() {
  console.log(this.color+" "+this.brand+", "+this.numberOfKilometers+"km");
};
Car.prototype.drive = function(km) {
  this.numberOfKilometers += km;
};
Car.prototype.addInspection = function(inp) {
  this.inspections.push(inp);
};
Car.prototype.showInspections = function() {
  console.log("Daty przeglądow: " + this.inspections);
}
function Car(brand, color, numberOfKilometers) {
  this.brand = brand;
  this.color = color;
  this.numberOfKilometers =  numberOfKilometers || 0;
  this.inspections = [];
}

Car.prototype.showInspections = function() {
  console.log("Daty naszych przeglądow: " + this.inspections);
}

var myCar = new Car("honda", "silver");
myCar.printCarinfo();
myCar.drive(50);
myCar.printCarinfo();
myCar.drive(250);
myCar.printCarinfo();

var myMerc = new Car("Mercedes", "Black", 1500);
myMerc.printCarinfo();
myMerc.drive(20);
myMerc.printCarinfo();

myMerc.addInspection("02.05.2008");
myCar.addInspection("02.06.2008");
myMerc.addInspection("04.11.2011");
myMerc.addInspection("24.09.2013");
myCar.addInspection("02.01.2014");

myMerc.showInspections();
myCar.showInspections();

console.log(myCar.__proto__.hasOwnProperty('printCarinfo'));
console.log(myCar.hasOwnProperty('drive'));
console.log(myCar.hasOwnProperty('addInspection'));
console.log(myCar.hasOwnProperty('showInspections'));
*/

//Zadanie 6

console.log("Zadanie6");

var bird = {
  type: "eagle",
  name: "Murica",
  getType: function() {
    return type;
  }
}

console.log(bird instanceof Object); //yes, bird is an object

//Zadanie 7

var myString = "Weronika";
console.log(myString instanceof String);
console.log(myString instanceof Object);

var myNumber = 11;
console.log(myNumber instanceof Number);


//Zadanie 9

var rectangle = {
  length: 1,
  width: 1,
  getArea: function(){
    console.log("Area is: " + this.length * this.width);
  },
  getPerimeter: function(){
    console.log("Perimeter is: " + 2 * (this.length + this.width));
  }
}

var newRectangle1 = Object.create(rectangle);
newRectangle1.getArea();
newRectangle1.getPerimeter();

var newRectangle2 = Object.create(rectangle, {
  length: {value: 5},
  width: {value: 5},
});
newRectangle2.getArea();
newRectangle2.getPerimeter();

var newRectangle3 = Object.create(rectangle);
newRectangle3.length = 80;
newRectangle3.width = 2;
newRectangle3.getArea();
newRectangle3.getPerimeter();

//Zadanie 10

var Calculator = function() {
  this.history = [];
}
Calculator.prototype.add = function(num1,num2){
  console.log(num1+num2);
  this.history.push("added " + num1 + " to " + num2 + " got " + (num1+num2));
}
Calculator.prototype.multiply = function(num1,num2){
  console.log(num1*num2);
  this.history.push("multiplied " + num1 + " with " + num2 + " got " + (num1*num2));
}
Calculator.prototype.substract = function(num1,num2){
  console.log(num1-num2);
  this.history.push("substracted " + num2 + " from " + num1 + " got " + (num1-num2));
}
Calculator.prototype.divide = function(num1,num2){
  console.log(num1/num2);
  this.history.push("divided " + num1 + " by " + num2 + " got " + (num1/num2));
}
Calculator.prototype.printHistory = function(){
  console.log(this.history);
}
Calculator.prototype.clearHistory = function(){
this.history = [];
}

var calc1 = new Calculator();
calc1.add(3,4);
calc1.add(30,40);
calc1.multiply(3,5);
calc1.substract(100,23);
calc1.divide(49,7);

var calc2 = new Calculator();
calc2.add(1,2);
calc2.multiply(30,5);
calc2.substract(10,2);

calc1.printHistory();
calc2.printHistory();
