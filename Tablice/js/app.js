//Zadanie z wykładowcą
function distFromAverage(array) {
 var distTable = [];
 var sum = 0;

 for(var i =0; i < array.length; i++){
   sum += array[i];
 }
var average = sum / array.length;

console.log(average);

for(var i =0; i < array.length; i++){
  distTable[i] = Math.abs(array[i]-average);
}

  return distTable;
}
console.log(distFromAverage([1,2,3,4,5,6,7]));
console.log(distFromAverage([1,1,1,1]));
console.log(distFromAverage([2,8,3,7]));


//Zadanie 1
var myFruits=["banan", "jabłko", "gruszka", "poziomka"];
console.log(myFruits[0]);
console.log(myFruits[myFruits.length-1]);

for(var i = 0; i < myFruits.length; i++){
  console.log(myFruits[i]);
}

//Zadanie 3

console.log("");

function printTable(array) {

for (var i =0; i < array.length; i++){
  console.log(array[i]);
}


}

printTable([1,2,3]);

//Zadanie 4

function multiplyArray(array) {
var multiplyResult= 1;
  for (var i =0; i < array.length; i++){
    multiplyResult = multiplyResult * array[i];
  }
 return multiplyResult;
}

console.log(multiplyArray([1,2,3,5]));

//Zadanie 5

function getEvenAverage(array) {

  var sum = 0;
  var counter = 0;

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sum += array[i];
      counter++;
    }
  }
  if (sum == 0) {
    return null
  } else {
    return sum / counter;
  }

}
console.log(getEvenAverage([32, 5, 2, 32, 56, 34]));
console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 3, 5, 7]));

//Zadanie 6

function sortArray(array) {
  array.sort(function(a, b) {
    return a - b;
  });
  return array;
}
console.log(sortArray([145,11,3,64,4,6,10]));

//Zadanie 7
function addArrays(array1, array2) {
  resultArray = [];

  for(var i = 0; i < Math.max(array1.length, array2.length); i++){
      array1[i] = array1[i] || 0;
      array2[i] = array2[i] || 0;
      resultArray[i] = array1[i] + array2[i];
  }
  return resultArray;
}
console.log(addArrays([4,0,1,3,4], [1,9,6,7,8,17]));
