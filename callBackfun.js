// setTimeout(function () {
//   console.log("callback time");
// }, 2000);

// function b(a) {
//   console.log("b");
//   a();
// }

// b(function a() {
//   console.log("a");
// });

function counterInc() {
  let count = 1;
  document.getElementById("button").addEventListener("click", function xyz() {
    // alert("button pressed");
    console.log("Event button pressed", count++);
  });
}

counterInc();
