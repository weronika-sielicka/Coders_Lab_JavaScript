var parent = document.getElementsByClassName("parent");
var children = document.getElementsByClassName("children");
var hideChildrenElement = function(){
  this.children[0].style.display = "none";
}

for (var i = 0; i < parent.length; i++){

parent[i].addEventListener("mouseover",function(){
  this.children[0].style.display = "inline-block";
});
}


for (var i = 0; i < parent.length; i++){

parent[i].addEventListener("mouseout",hideChildrenElement);


}
