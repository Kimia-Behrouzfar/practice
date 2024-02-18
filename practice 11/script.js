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
    // console.log(`Movement ${i + 1} you deposited ${movement}`);
  } else {
    // console.log(`Movement ${i + 1} you withdrew ${Math.abs(movement)}`);
  }
});
//006 forEach With Maps and Sets *******

// 007 PROJECT Bankist App ********

// 008 Creating DOM Elements *******

// 009 Coding Challenge #1_en *******

// 010 Data Transformations map, filter, reduce ******

// 011 The map Method *********

const movementDes = movements.map(
  (mov, i) =>
    `Movement ${i + 1} you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`

  // if (mov > 0) {
  //   return `Movement ${i + 1} you deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1} you withdrew ${Math.abs(mov)}`;
  // }
);
// console.log(movementDes);

// 012 Computing Usernames *********

const createUser = function (user) {
  // const user = "Sjg Tjhgb Wkjhg"; // stw
  const username = user
    .toLowerCase()
    .split(" ")
    .map((name) => name[0])
    .join("");
  return username;
};
// console.log(createUser("Sjg Tjhgb Wkjhg"));
// 013 The filter Method_en **********
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
// console.log(movements);
// console.log(deposits);

const withdrew = movements.filter((mov) => mov < 0);
// console.log(withdrew);

// 014 The reduce Method *********
// Max value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
// console.log(max);
// 015 Coding Challenge #2 ********
const calAvreg = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAges);
  const adult = humanAges.filter((age) => age >= 18);
  // console.log(adult);
  const avreage = adult.reduce((acc, age) => acc + age, 0) / adult.length;
  return avreage;
};
const avg = calAvreg([2, 4, 6, 9]);
// console.log(avg);
// 016 The Magic of Chaining Methods ******
// 017 Coding Challenge #3 *****
// 018 The find Method ******
const number = [100, -234, 23, -87, 56];
const first = number.find((mov) => mov < 0);
// console.log(number);
// console.log(first);
// 019 Implementing Login *******

// 020 Implementing Transfers *******
