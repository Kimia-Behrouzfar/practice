//004 How the DOM Really Works
//005 Selecting, Creating, and Deleting Elements
const header = document.querySelector(".header");
const message = document.createElement("div");
console.log(message.classList.add("messages"));
console.log((message.textContent = "hi every one!!"));
console.log(
  (message.innerHTML = `hello world!<button class='btn'>got it</button>`)
);
header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
//006 Styles, Attributes and Classes
message.style.backgroundColor = "red";
message.style.width = "100px";
message.style.backgroundColor = "red";
console.log(message.style.backgroundColor);
//007 Implementing Smooth Scrolling
