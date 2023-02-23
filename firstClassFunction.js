// b();
// c();
//function statement aka function declaration
function b() {
  console.log("Hello this is funciton statement and function declaration");
}
b();

//function expression
var c = function () {
  console.log("this is function expression");
};
console.log(b);
c();

//Anonymous function

// function (){

// }

//Name function expression
// var name = function nameFun() {
//   console.log("This is name function expression");
// };

// nameFun();

//first class function
var fcb1 = function (param1) {
  console.log(param1);
};
var fcb2 = function (param1) {
  return function xy() {};
};

// fcf(function fcb1() {
//   console.log("hello");
// });

function xyz() {
  console.log("Hellow first class function");
}
// fcb1(xyz);
console.log(fcb2());
