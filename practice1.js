
// let nam = "kimia"
// alert("hiii " + nam)

// let num = 6;
// if (num > 10)  {
//   console.log("big number");
// } else{
//     console.log("small number");
// }


// for (let i = 0; i < 11; i++){
//  for(let j = 0; j < 11; j++){
//   console.log(`${i} x ${j} = ${i * j}`)
//  }
//  console.log("i");
// }

// const foo = 9;
// switch (foo){
//     case 1:
//     console.log(1);
//     break;
//     case 5:
//         console.log(5);
//         break;
//         case 9:
//             console.log("correct!");
//             break;

//             defaulf:
//             console.log("defaulf");

// }

// console.log(foo);


// let alphabet = ["A", "B", "C", "D"];
// let alpha = alphabet.shift();

// console.log(alphabet);
// console.log(alpha);


// const num = [1, 2, 3, 4];
// console.log(num.unshift(5));
// console.log(num);

// const names = ["kimi", "kini"];
// names.unshift("mohm");

// console.log(names);


// const num1 = [1, 2, 3, 4];
// const num2 = [5, 6, 7, 8];

// const num3 = num1.concat(num2);

// console.log(num3);

// const animals = ["cat", "dog"];
// animals.includes("cat");

// const num = [1, 2, 3, 4, 5];
// num.sort();
// console.log(num);


// let myTodos = {
//     day: 'Monday',
//     meetings: 0,
//     meetDone: 0,

//     addMeeting: function() {
//         console.log(this);
//     }
// }

// let myTodosTwo = {
//     day: 'Monday',
//     meetings: 10,
//     meetDone: 110,

//     addMeeting: function(meetings) {
//        this.meetings = this.meetings + meetings
//     },

//     summary: function(){
//         return `hiii ${this.meetings}!!!`
//     },
// }

// myTodosTwo.addMeeting(4);
// console.log(myTodosTwo.summary());

// console.log([1, 2, 3, 2, 1].indexOf(2));


// function remove(array, index) {
  //   return array.slice(0, index)
  //     .concat(array.slice(index + 1));
  // }
  // console.log(remove(["a", "b", "c", "d", "e"], 2));

/////???////
  // function normalize() {
  //   console.log(this.coords.map(n => n / this.length));
  // }
  // normalize.call({coords: [0, 2, 3], length: 5});
  // → [0, 0.4, 0.6]
/////???/////



// let age = 9;
// console.log(age);

// age = 8;
// console.log(age);


// let names = ['h', 'f', 'k'];

// let result = names.join(',');
// console.log(result);


// for (let b = 1, b <= 6; b++){
// console.log(i, "hiii")
// }


// for(let i = 25; i <= 0; i -= 5){
// console.log(i);
// }


//function expression

// const greet = function(){
//   return + 6;
// };

// const  greett = greet(5);
// console.log(greett);

//function decleration

// function speak (name = 'mia', time = 'day'){
// console.log(`goood ${name} ${time}`);
// }
// speak();
// speak('miaaa');

// let i = 0;
// while(i < 8){
// console.log(i);
// i++;
// }

// const number = [1, 2, 3, 4, 5];
// for(let i = 0; i < number.length; i++){
// if(number[i] === 4){
//   console.log('finished');
// continue;
// }
// console.log(number[i]);
// }


// const num = [ 1, 2, 3, 4];

// for(let elem of num){
// elem += 5;
// console.log(elem);
// }


// let i = 0;

// do{
//   console.log('hiii')
//   i++;
// }
// while(i < 4);


//if statment 
// const lastName = "kjgksghlgdgg";

// if (lastName.length < 5){
// console.log('nice');
// }else if (lastName.length < 2){
//   console.log('good');
// }else{
//   console.log('bad');
// }


// let user = false;

// if(!user){
// console.log('hiii');
// }


//array method

//foreach

// const num = [ 1, 2, 3, 4];

// num.forEach(Element => {
//   console.log(num);
// })

//map

// const num = [ 1, 2, 3, 4];

// const map = num.map(x => x + 2);

// console.log(map);

//filter

// const num = [ 1, 2, 3, 4];

// const filter = num.filter(number => number > 2);

// console.log(filter);

//find

// const num = [ 10, 211, 35, 245];

// const find = num.find(number => number > 200);

// console.log(find);

//reduse!

//some!

//every!

// const greet = () => 'hii';

// const result =greet();

// console.log(result);


  //   const randomNumber = Math.floor(Math.random() * 100) + 1
  //   console.log('Random Number', randomNumber)

  //   function checkGuess() {
  //     let myGuess = guess.value
  //     if (myGuess === randomNumber) {
  //       feedback.textContent = "You got it right!"
  //     } else if (myGuess > randomNumber) {
  //       feedback.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
  //     } else if (myGuess < randomNumber) {
  //      feedback.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
  //    }
  //  }
  //  submitGuess.addEventListener('click', checkGuess)

// const arr = [2, 9, 9];

// arr.indexOf(9,-1);


