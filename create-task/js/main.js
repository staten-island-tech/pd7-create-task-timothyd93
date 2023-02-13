import { DOMSelectors } from "./dom";
import "../styles/style.css";

function displayKeyboard() {
  const alphabet = [
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
      ` <button type="button" class="btn">${letter}  </button> `
    )
  );
}
displayKeyboard();
DOMSelectors.btn.forEach((button) =>
  button.addEventListener("click", function () {
    console.log("Here");
  })
);
