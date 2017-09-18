var named = document.getElementById("named");
var type = document.getElementById("type");

named.addEventListener("input", function(e) { //input żeby zmieniało się pole w czasie rzeczywistym
  console.log("aa");

  if (named.value.charAt(0) == "4" && named.value.length >= "13" && named.value.length <= "16") {

      type.innerHTML = "Visa";

  } else if (named.value.charAt(0) == "5" && named.value.length == "16") {
      type.innerHTML = "Mastercard";

  } else if (named.value.charAt(0) == "3" && (named.value.charAt(1) == "4" ||
     named.value.charAt(1) == "7") && named.value.length == "15") {
      type.innerHTML = "AmericanExpress";
  } else {
    type.innerHTML = "";
  }

})
