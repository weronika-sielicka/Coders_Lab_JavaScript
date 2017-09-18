/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function(){

var buttons = document.querySelectorAll("button");
var counter = document.querySelectorAll(".counter");

/* droga okrężna
var count = 0;
var count1 = 0;
var coun2 = 0;

buttons[0].addEventListener("click",function(){
  count++;
  counter[0].innerText = count;
}

buttons[1].addEventListener("click",function(){
  count1++;
  counter[0].innerText = count1;
}

buttons[2].addEventListener("click",function(){
  count2++;
  counter[2].innerText = count;
} */


for(var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click",function(){
this.nextElementSibling.children[0].innerHTML++;
  })
}

});
