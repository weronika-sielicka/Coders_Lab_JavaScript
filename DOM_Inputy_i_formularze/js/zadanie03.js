var team1 = document.getElementById("team1");
var team2 = document.getElementById("team2");
var points1 = document.getElementById("points1");
var points2  = document.getElementById("points2");
var button = document.querySelector("button");
var td1 = document.querySelector(".table-bordered").children[0].children[2].children[0];
console.log(td1);
var td2 = document.querySelector(".table-bordered").children[0].children[2].children[1];
console.log(td2);

var td3 = document.querySelector(".table-bordered").children[0].children[2].children[2];
console.log(td3);



button.addEventListener("click", function(e){

e.preventDefault()  //powoduje zatrzymanie wysyłki formularza!!!

if(!team1.value==team2.value || points1.value >= 0 || points2.value >= 0){

td1.innerHTML = team1.value;
td2.innerHTML = team2.value;
td3.innerHTML = points1.value + " - " + points2.value;

} else {
alert("Wybrano tylko jedną drużynę lub wpisano punkty ujemne!");
}

})
