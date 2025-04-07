const api_url = "https://quotes-api-self.vercel.app/quote";
const quotes = document.getElementById("quote");
const authors = document.getElementById("author");

async function getquote(url) {
  const response = await fetch(url);
  var data = await response.json();
  //   console.log(data);
  quotes.innerHTML = data.quote;
  authors.innerHTML = data.author;
}

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quotes.innerHTML +
      "---- by " +
      authors.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
}

getquote(api_url);
