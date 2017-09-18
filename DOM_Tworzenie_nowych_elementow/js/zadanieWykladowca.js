/**
 * Created by Jacek on 2016-01-12.
 */

var del = document.querySelectorAll(".deleteBtn");

for (var i = 0; i < del.length; i++){
del[i].addEventListener("click", function(){
this.parentElement.parentElement.parentNode.removeChild(this.parentElement.parentElement);



})

}
