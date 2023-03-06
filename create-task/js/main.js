import { words } from "./array";
import { DOMSelectors } from "./dom";
import "../styles/style.css";

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
    DOMSelectors.keyboard.insertAdjacentHTML(
      "beforeend",
      `<button type=button class="lbtn">${letter}  </button> `
    )
  );
}
displayKeyboard();

function getRandomWord() {
  DOMSelectors.lives.innerHTML = `You have 10 lives left`;
  const wordIndex = Math.floor(Math.random() * words.length);
  const word = words[wordIndex];
  const correctLetters = word.split(``);
  const guessedWord = [];
  let x = 10;
  correctLetters.forEach((letter) => guessedWord.push(`_`));
  document.querySelectorAll(".lbtn").forEach((button) =>
    button.addEventListener("click", function () {
      button.style.color = "#FF0000";
      if (correctLetters.includes(button.innerHTML[0])) {
        const indices = [];
        let index = correctLetters.indexOf(button.innerHTML[0]);
        while (index != -1) {
          indices.push(index);
          index = correctLetters.indexOf(button.innerHTML[0], index + 1);
        }
        indices.forEach(
          (index) => (guessedWord[index] = correctLetters[index])
        );
        DOMSelectors.word.innerHTML = "";
        DOMSelectors.word.insertAdjacentHTML(
          "beforeend",
          guessedWord.join(" ")
        );
        const correctGuess = correctLetters.join(" ");
        if (DOMSelectors.word.innerHTML === correctGuess) {
          DOMSelectors.winmsg.innerHTML = "Congratulations, you win!";
          DOMSelectors.refresh.insertAdjacentHTML(
            "beforeend",
            `<button type=button>Click to play again</button>`
          );
          DOMSelectors.refresh.addEventListener("click", function () {
            location.reload();
          });
        } else {
        }
      } else {
        x--;
        DOMSelectors.lives.innerHTML = `You have ${x} lives left`;
        if (x > 0) {
        } else {
          DOMSelectors.lives.innerHTML = `You ran out of lives, you lost! The word was ${word}.`;
          DOMSelectors.lossmsg.innerHTML = `GAMEOVER`;
          DOMSelectors.refresh.insertAdjacentHTML(
            "beforeend",
            `<button type=button>Click to play again</button>`
          );
          DOMSelectors.refresh.addEventListener("click", function () {
            location.reload();
          });
        }
      }
    })
  );
  DOMSelectors.word.insertAdjacentHTML("beforeend", guessedWord.join(" "));
}
