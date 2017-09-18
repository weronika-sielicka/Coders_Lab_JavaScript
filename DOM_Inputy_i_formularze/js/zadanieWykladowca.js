var email = document.getElementById('email');
var firstName = document.getElementById('name');
var surname = document.getElementById('surname');
var pass1 = document.getElementById('pass1');
var pass2 = document.getElementById('pass2');
var agree = document.getElementById('agree');
var button = document.querySelector('button');
var success = document.querySelector('.success-message');
var error = document.querySelector('.error-message');

button.addEventListener("click",function(e){
  if(validate()) {
    alert("OK");
  } else {
  e.preventDefault();
    alert("Not sent");
  }
})

function validate(){

  var test = 0;


  if (email.value.indexOf("@") == -1) {
    error.innerText += "Email musi posiadać znak @";
test++;
  }

if(firstName.value.length < 6){
  error.innerText += "\n Twoje imię jest za krótkie";
  test++;

}

if(surname.value.length < 6){
  error.innerText += "\n Twoje nazwisko jest za krótkie";
  test++;

}

if(pass1.value.length == 0 || pass1.value !== pass2.value){
  error.innerText += "\n Hasła nie są takie same lub są puste";
  test++;

}

if(!agree.checked){
  error.innerText += "\n Musisz zaakceptować warunki";
  test++;

}

if (test ==0){
  return true;
}else {
  return false;
}

}
