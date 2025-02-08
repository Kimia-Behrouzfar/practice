// const apiUrl = "https://api.quotable.io/random";
const apiUrl = "https://api.api-ninjas.com/v1/quotes";
// const apiUrl = "https://zenquotes.io/api/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}
getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + quote.innerHTM,
    "Tweet Window",
    "width=600,height=300"
  );
}
