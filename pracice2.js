//Async JavaScript//
console.log(1);
console.log(2);

setTimeout(() => {
  console.log("callback function");
}, 3000);
console.log(3);
console.log(4);
