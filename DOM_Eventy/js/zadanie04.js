 document.addEventListener("DOMContentLoaded", function(){

 var buttons = document.querySelectorAll('button');
 var counter = document.querySelector('.counter');
 var count = 0;

 for(var i = 0; i < buttons.length; i++){
   buttons[i].addEventListener("click", function(){
       count++;
       counter.innerHTML = count;
   });
 }


 });
