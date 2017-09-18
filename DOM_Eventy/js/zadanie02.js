 document.addEventListener("DOMContentLoaded", function(){

var button = document.getElementById("mainBtn");

var show = function(){
  console.log("Hurra!");
}

button.addEventListener("click",show);

});
