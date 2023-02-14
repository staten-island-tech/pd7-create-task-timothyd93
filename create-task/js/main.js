import { DOMSelectors } from "./dom";
import "../styles/style.css";

function getRandomWord() {
  const URL = `https://random-word-api.herokuapp.com/word`;
  async function getData(URL) {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    }
  }
  getData(URL);
}
DOMSelectors.testbtn.addEventListener("click", function () {
  // getRandomWord();
  checkWord();
});

function checkWord() {
  // const correct = getRandomWord();
  const guess = DOMSelectors.searchbar.value;
  if ((guess = getRandomWord())) {
    console.log(`good`);
  } else {
    console.log(`bad`);
  }
  console.log(guess);
  console.log(correct);
}
