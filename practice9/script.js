//Example S9-016-SETS
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set("hfghkurghkjs").size);
//S9-017-Maps Fundamentals are useful than SETS
const resturant = new Map();
resturant.set("name", "pizza");
resturant.set(1, "italy");
console.log(resturant.set(2, "franch"));

resturant
  .set("jfgvjd", ["kudfhvk", "dghgfg", "jgfjkdkg"])
  .set("open", 11)
  .set("close", 24)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(resturant.get("name"));
console.log(resturant.get("open"));
console.log(resturant.get(false));
console.log(resturant.get(2));

const time = 10;
console.log(
  resturant.get(time > resturant.get("open") && time < resturant.get("close"))
);

console.log(resturant.has("close"));
resturant.delete(2);
resturant.set(document.querySelector("h1"), "Head");
const arr = [1, 2, 3];
resturant.set(arr, "test");
// resturant.clear();
console.log(resturant);
console.log(resturant.size);

console.log(resturant.get(arr));
//S9-018 Maps Iteration
