//variables 

var a; //declare a variable
var b = 'b' //declare and assign a variable
b = 'bb'; //reassign a variable
var a = 'aa'; //redeclare a variable


//global scope

var fruit = 'apple'; // global scope

function bestFruit() {
  console.log(fruit); // global scope
}

bestFruit();


function countries() {
  country = "Colombia"; //global scope
  console.log(country); 
}

countries();
console.log(country);