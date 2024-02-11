// 003 Simple Array Methods ****
// let arr = ["a", "b", "c", "d", "e"];
//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log([...arr]);
//SPLICE
//one before and one after!
// arr.splice(-1);
// console.log(arr);
// arr.splice(2, 4);
// console.log(arr);
//REVERSE
// console.log(arr.reverse());
//CONCAT
// const arr2 = ["j", "i", "h"];
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
//JOIN
// console.log(letters.join("-"));

//004 The new at Method ****
const arr = [11, 22, 33];
// console.log(arr[1]);
// console.log(arr.at(0));

//005 Looping Arrays forEach *****
const movements = [100, -234, 23, -87, 56];

movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
  }
});
