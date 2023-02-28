//Async JavaScript//
// console.log(1);
// console.log(2);

// setTimeout(() => {
//   console.log("callback function");
// }, 3000);
// console.log(3);
// console.log(4);

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
// console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("err");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos.json")
//   .then((data) => {
//     console.log("resolved 1", data);
//     return getTodos("todos.json");
//   })
//   .then((data) => {
//     console.log("resolved 2", data);
//     return getTodos("todoss.json");
//   })
//   .then((data) => {
//     console.log("resolved 3", data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

// console.log(1);
// console.log(2);

// getTodos("todos.json", (err, data) => {
//   console.log(data);
//   getTodos("todoss.json", (err, data) => {
//     console.log(data);
//   });
// if (err) {
//   console.log(err);
// } else {
//   console.log(data);
// }
// console.log(err, data);
// });

//promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("data");
//     reject("err");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//fetch API

// fetch("todos.json")
//   .then((response) => {
//     console.log("resolved", response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });

//async & await

// const getTodos = async () => {
//   const response = await fetch("todos.json");

//   if (response.status !== 200) {
//     throw new Error("can not fetch");
//   }

//   const data = await response.json();
//   return data;
// };

// getTodos()
//   .then((data) => console.log("resolved", data))
//   .catch((err) => console.log("rejected", err.message));
