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
    // console.log(`${greating} ${name}`);
  };
};

const greater = great("hey");
greater("kiana");
greater("mia");

great("hiii")("ali");

// 008 The call and apply Methods ********
const lufthansa = {
  airline: "Lufthansa",
  iateCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iateCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iateCode} ${flightNum}`, name });
  },
};
// lufthansa.book(244, "kimia");
// lufthansa.book(786, "mia");
// console.log(lufthansa);
// 009 The bind Method ********
// 010 Coding Challenge #1 *******
//  create poll app
const poll = {
  question: "what is your favourite programming language?",
  optins: ["0: Javascript", "1:Python", "2:Rust", "3:c++"],
  answers: new Array(4).fill(0),

  registerNumAnswer() {
    //Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.optins.join("\n")}\n(Write option number)`
      )
    );
    console.log(answer);

    //Register answer
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    this.displayResult();
    this.displayResult("string");
  },

  displayResult(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      //poll results are 13, 2, 4, 1
      console.log(`poll results are: ${this.answers.join(", ")}`);
    }
  },
};
// poll.registerNumAnswer();

document
  .querySelector(".btn")
  .addEventListener("click", poll.registerNumAnswer.bind(poll));

// 011 Immediately Invoked Function Expressions (IIFE) *****

const runOnce = function () {
  console.log("this will never run again");
};

runOnce();
// IIFE
(function () {
  console.log("run");
})();

(() => console.log("also run"))();

// 012 Closures_en ******
