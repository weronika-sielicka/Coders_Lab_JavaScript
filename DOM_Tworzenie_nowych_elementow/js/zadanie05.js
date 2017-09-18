var button = document.getElementsByClassName('moveBtn');
var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");


for(var i = 0; i < button.length; i++){


button[i].addEventListener("click",function(){


if (this.parentElement.parentElement.id == "list1"){
  this.parentElement.parentNode.removeChild(this.parentElement);

list2.appendChild(this.parentElement)

} else if (this.parentElement.parentElement.parentElement.id == "list2") {
  this.parentElement.parentNode.removeChild(this.parentElement);
  list1.appendChild(this.parentElement)

}

})
}
