import { words } from "./array";
import { DOMSelectors } from "./dom";
import "../styles/style.css";
// function getRandomWord() {
//   const URL = `https://random-word-api.herokuapp.com/word`;
//   async function getData(URL) {
//     try {
//       const response = await fetch(URL);
//       const data = await response.json();
//       console.log(data[0]);
//       console.log(data[0].length);
// let x = 0;
// do {
//   DOMSelectors.word.insertAdjacentHTML("beforeend", `_ `);
//   x = x + 1;
// } while (x < data[0].length);
//       DOMSelectors.lives.innerHTML = "Lives: 10";
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   getData(URL);
// }

DOMSelectors.startbtn.addEventListener("click", function () {
  removeWord();
  getRandomWord();
});

function removeWord() {
  DOMSelectors.word.innerHTML = "";
}

function displayKeyboard() {
  let alphabet = [
    `a`,
    `b`,
    `c`,
    `d`,
    `e`,
    `f`,
    `g`,
    `h`,
    `i`,
    `j`,
    `k`,
    `l`,
    `m`,
    `n`,
    `o`,
    `p`,
    `q`,
    `r`,
    `s`,
    `t`,
    `u`,
    `v`,
    `w`,
    `x`,
    `y`,
    `z`,
  ];
  alphabet.forEach((letter) =>
    DOMSelectors.content.insertAdjacentHTML(
      "beforeend",
      `<button type=button class="lbtn">${letter}  </button> `
    )
  );
}
displayKeyboard();

function getRandomWord() {
  const wordIndex = Math.floor(Math.random() * words.length);
  const word = words[wordIndex];
  console.log(word);
  const correctLetters = word.split(``);
  console.log(correctLetters);
  document.querySelectorAll(".lbtn").forEach((button) =>
    button.addEventListener("click", function () {
      // console.log(button.innerHTML);
      const thisLetter = button.innerHTML;
      console.log(thisLetter[0]);
      console.log(correctLetters);
      if (correctLetters.includes(thisLetter[0])) {
        console.log(`Good`);
      } else {
        console.log(`Bad`);
      }
    })
  );
  let x = 0;
  do {
    DOMSelectors.word.insertAdjacentHTML("beforeend", `_ `);
    x = x + 1;
  } while (x < word.length);
}
