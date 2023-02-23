// closure example

//closure is a combination of function and it's lexical env bundlle together

//simple word
//Every fun in js has acceess to it's outer lexical env that means access to var and fun inside present in the lexical env

//example

// function outest() {
//   var c = 20;
//   function outer(b) {
//     let i = 10;
//     function inner() {
//       console.log(i, b, c);
//     }
//     //   let i = 100;
//     //   inner();
//     return inner;
//   }
//   return outer;
// }
// var value = outest()("hello");
// // console.log(value);
// value();

// outer()();

// function Counter() {
//   var count = 0;
//   return function incCounter() {
//     count++;
//     console.log(count);
//   };
// }
// var newCounter = Counter();
// newCounter();
// newCounter();
// newCounter();

function Counter() {
  var count = 0;
  this.incCounter = function () {
    count++;
    console.log(count);
  };
  this.decCounter = function () {
    count--;
    console.log(count);
  };
}
var newCounter = new Counter();
newCounter.incCounter();
newCounter.incCounter();
newCounter.decCounter();
