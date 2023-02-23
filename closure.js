console.log("NAdeem");

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y; // returning y functin
// }
// var z = x();
// console.log(z);
// z();

function z() {
  var b = 100;
  function x() {
    var a = 10;
    function y() {
      console.log(a, b);
    }
    y();
  }
  x();
}

z();
