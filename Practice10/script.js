// 003 Default Parameters ********
const bookings = [];
const createBooking = function (flightNum, numPassenger = 1, price = 200) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 199);
// 004 How Passing Arguments Works Value vs. Reference ********

// const
