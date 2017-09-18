var arr = [
[11, 12],
[42, 2],
[-4, -120],
[0, 0],
[1, 34],
];

//z wykonawcą
var arr = [
                  [2,2,2,1,2,2,2,2],
                  [42, 2, 2],
                  [1,1,1,1],
                  [12, 2, 2],
                  [2, 2, 34, 3,2,2],
];

function checkArray(table) {
  var boolTable = [];

  for(var i = 0; i < table.length; i++){
    for(var j = 0; j < table[i].length; j++){

      if(table[i][j]%2 !== 0) {
        boolTable[i] = false;
       break;
      } else {
        boolTable[i] = true;
      }

    }
  }

  return boolTable;
}

console.log(checkArray(arr));

/////

var task1Array = [
                  [2, 3],
                  ["Ala", "Ola"],
                  [true, false],
                  [5, 6, 7, 8],
                  [12, 15, 67]
              ];


var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

//Zadanie1
console.log("Zadanie1");

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);


//Zadanie2
console.log("Zadanie2");

for (i = 0; i < task2Array.length; i++){
  console.log(task2Array[i]);
}

for (i = 0; i < task2Array.length; i++){
  console.log(task2Array[i].length);
}

for(var i = 0; i < task2Array.length; i++){
  for(var j = 0; j < task2Array[i].length; j++){
console.log(task2Array[i][j]);
      }
}  //Sposób na wypisanie wszystkich elementów tablicy dwuwymiarowej

//Zadanie3
console.log("Zadanie3");
function print2DArray(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array[i].length; j++){
  console.log(array[i][j]);
        }
  }

}

print2DArray(task2Array);

//Zadanie 5
console.log("Zadanie5");

function create2DArray(rows,columns){

var resultTable = [];

var number =1;

for(var i = 0; i < rows; i++){
  resultTable[i] = [];
  for(var j = 0; j < columns; j++){

    resultTable[i][j] = number;
    number++;
      }
}
return resultTable;
}

console.log(create2DArray(4,4));

/* Sposób Grześka

function create2DArray(rows, columns) {

  var resultTable = [];
  var number = 1;

  for (var i = 0; i < rows; i++) {

    resultTable.push([]);
    //resultTable[i] = [];

    for (var j = 0; j < columns; j++) {

      resultTable[i][j] = number;
      number++;

    }
  }
  return resultTable;
}

console.log(create2DArray(4, 6));

*/
