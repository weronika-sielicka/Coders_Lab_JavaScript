var img = document.querySelectorAll("img");
var select = document.querySelector(".form-control");
var option = document.querySelectorAll("option");

img[0].style.display = "none";
img[1].style.display = "none";
img[2].style.display = "block";


select.addEventListener("change", function() {
  if (select.value == option[0].innerText) {
    img[0].style.display = "none";
    img[1].style.display = "none";
    img[2].style.display = "block";
    console.log("Windows");

  } else if (select.value == option[1].innerText) {
    img[0].style.display = "block";
    img[1].style.display = "none";
    img[2].style.display = "none";
    console.log("Apple");


  } else if (select.value == option[2].innerText) {
    img[0].style.display = "none";
    img[1].style.display = "block";
    img[2].style.display = "none";
  }

})
