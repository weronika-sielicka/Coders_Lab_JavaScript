/**
 * Created by Jacek on 2016-01-12.
 */

 var divs = document.getElementsByTagName("div");

 for (var i = 0; i < divs.length; i++) {
   divs[i].addEventListener("mouseover", function(){

     this.children[0].children[0].style.backgroundColor = "red";
     this.children[0].lastElementChild.style.backgroundColor = "blue";
     for (var i = 1; i < this.children[0].children.length-1; i++) {
       this.children[0].children[i].style.backgroundColor="green";
     }
   })
 }
