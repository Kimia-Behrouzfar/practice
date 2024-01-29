//Example S9-016-SETS
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set("hfghkurghkjs").size);
//S9-017-Maps Fundamentals are useful than SETS
const resturant = new Map();
resturant.set("name", "pizza");
resturant.set(1, "italy");
// console.log(resturant.set(2, "franch"));

resturant
  .set("jfgvjd", ["kudfhvk", "dghgfg", "jgfjkdkg"])
  .set("open", 11)
  .set("close", 24)
  .set(true, "we are open")
  .set(false, "we are closed");

// console.log(resturant.get("name"));
// console.log(resturant.get("open"));
// console.log(resturant.get(false));
// console.log(resturant.get(2));

const time = 10;
// console.log(
resturant.get(time > resturant.get("open") && time < resturant.get("close"));
// );

// console.log(resturant.has("close"));
resturant.delete(2);
resturant.set(document.querySelector("h1"), "Head");
const arr = [1, 2, 3];
resturant.set(arr, "test");
// resturant.clear();
// console.log(resturant);
// console.log(resturant.size);

// console.log(resturant.get(arr));
//S9-018 Maps Iteration
const question = new Map([
  ["question", "what is the best language in programming?"],
  [1, "c"],
  [2, "java"],
  [3, "javascript"],
  ["correct", 3],
  [true, "correct"],
  [false, "try again"],
]);
console.log(question);

//Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("your answer"));
console.log(answer);

console.log(question.get(question.get("correct") === answer));

//convert map to array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);
