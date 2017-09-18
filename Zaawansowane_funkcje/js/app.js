//Zadanie 2

function showMax() {
  //console.log(Math.max(...arguments)); //rest operator argument resztowy

  var max = arguments[0];

  for (var i = 1; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  console.log(max);
}

showMax(5, 29, 6, 4, 34, 56, 2, 3);

//Zadanie 3
console.log("Zadanie 3");

function countHello(x) {
    if ( x>= 1 && x <= 10 && Math.floor(x) == x) {
        var i = 1;

        var count = function(){
            console.log("Hello " + i);
            i++;
            if ( i>x ) {
                clearInterval(showHello);
                console.log("Koniec!")
            }
        }

        var showHello = setInterval(count, 1000);

    } else {
        console.log('To nie jest liczba całkowita od 1 do 10');
    }
}
countHello(6);

//Zadanie 4

console.log("Zadanie 4");

function Hi(){
  console.log("Cześć!");
}

Hi();

var witaj = function(){
  console.log("Witaj!");
}

witaj();
