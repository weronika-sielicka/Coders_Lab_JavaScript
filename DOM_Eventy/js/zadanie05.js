 document.addEventListener("DOMContentLoaded", function() {



   var box = document.querySelectorAll(".box");

   for (var i = 0; i < box.length; i++) {

     box[i].addEventListener("click", function(){
       var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
       this.style.backgroundColor = randomColor;
     });

   }


 });
