// 003 Default Parameters ********
// const bookings = [];
// const createBooking = function (flightNum, numPassenger = 1, price = 200) {
//   const booking = {
//     flightNum,
//     numPassenger,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking("LH123");
// createBooking("LH123", 2, 199);
// 004 How Passing Arguments Works Value vs. Reference ********

const flight = "LH123";
const jonas = {
  name: "jonas",
  passport: 456784567,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH789";
  passenger.name = "Mr. " + passenger.name;

  //   if (passenger.passport === 456784567) {
  //     alert("check in");
  //   } else {
  //     alert("wrong passport");
  //   }
};
checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//is the same as doing
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
//005 First-Class and Higher-Order Functions ********
function count(a, b) {
  let counter = a + b;
  return function () {
    counter++;
  };
}
// console.log(count(1, 2));

// 006 Functions Accepting Callback Functions *******

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

//Higher-order function
const transformer = function (str, fn) {
  //   console.log(`original: ${str}`);
  //   console.log(`transformed: ${fn(str)}`);
  //   console.log(`transformed: ${fn.name}`);
};
transformer("JavaScript", upperFirstWord);
//another example
const high5 = function () {
  //   console.log("hello world");
};
document.body.addEventListener("click", high5);
["jfg", "sfghf", "jhgfd", "yfgf"].forEach(high5);
// 007 Functions Returning Functions ************

const great = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};

const greater = great("hey");
greater("kiana");
greater("mia");

great("hiii")("ali");
