const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.querySelector(".options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = () => {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

function selectOption(socialMedia) {
  document.getElementById("selectText").textContent = socialMedia;
}
// Dark & Light Mood
const icon = document.querySelector(".icon");
function dark() {
  document.body.classList.toggle("dark");
}
