getName();
console.log(a);
console.log(getName);

var a = 8; //undefind
// let a = 8; //refrence error
// const a = 8; //refrence error
function getName() {
  console.log("Learning js ");
}

var getName2 = () => {
  console.log("Namaste js"); // it is not a functionon it behave like var
};

let getName3 = () => {
  console.log("Namaste js"); // refrence error can not aacces before initilize
};

const getName4 = () => {
  console.log("Namaste js"); // refrence error can not aacces before initilize
};
