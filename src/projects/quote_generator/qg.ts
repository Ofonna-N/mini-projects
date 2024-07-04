const quote = document.getElementById("quote")!;
const author = document.getElementById("author")!;
const newQuoteBtn = document.getElementById("new-quote")! as HTMLButtonElement;
const twitterBtn = document.getElementById("tweet-quote")! as HTMLButtonElement;

type Quote = {
  author: string;
  text: string;
};
let quotes: Quote[] = [];
let selectedQuote: Quote = {
  text: "",
  author: "",
};

const getQuote = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (response.ok) {
      //   quote.innerText = data.content;
      quotes = data;
      displayRandomQuote();
      newQuoteBtn.disabled = false;
      twitterBtn.disabled = false;
    } else {
      quote.innerText = "An error occurred. Please try again later.";
    }
  } catch (error) {
    quote.innerText = "An error occurred. Please try again later.";
  }
};

const displayRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  selectedQuote = quotes[randomIndex];
  quote.innerText = selectedQuote.text;
  author.innerText = "- " + selectedQuote.author.slice(0, -10);
};

const initQuoteGenerator = () => {
  getQuote();
  newQuoteBtn.disabled = true;
  twitterBtn.disabled = true;
  newQuoteBtn.addEventListener("click", displayRandomQuote);
  twitterBtn.addEventListener("click", () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote.innerText} ${author.innerText}`;
    window.open(twitterUrl, "_blank");
  });
};

initQuoteGenerator();
