let Boxes = document.querySelectorAll(".Box");
let msg = document.querySelector("#msg");
let restartBtn = document.querySelector("#restart");

let turn0 = true; //player X or Player O

const winPatterns = [
  // all the wining conditions
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

Boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});
const checkWinner = () => {
  for (let pattern of winPatterns) {
    let value1 = Boxes[pattern[0]].innerText;
    let value2 = Boxes[pattern[1]].innerText;
    let value3 = Boxes[pattern[2]].innerText;

    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 === value2 && value2 === value3) {
        showWinner(value1);
      }
    }
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
};
restartBtn.addEventListener("click", () => {
  for(let box of Boxes){
    box.innerText = ""
  }
});
