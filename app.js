
document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("aboutBtn");
  const useBtn = document.getElementById("useBtn");

  const aboutDiv = document.getElementById("about");
  const useDiv = document.getElementById("use");
  const slide = document.querySelector(".slide"); // Get sidebar

  // ABOUT button click
  aboutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    slide.style.display = "block"; //Show sidebar
    aboutDiv.style.display = "block";
    useDiv.style.display = "none";
  });

  // USES button click
  useBtn.addEventListener("click", function (e) {
    e.preventDefault();
    slide.style.display = "block"; // Show sidebar
    useDiv.style.display = "block";
    aboutDiv.style.display = "none";
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("aboutBtn");
  const useBtn = document.getElementById("useBtn");

  const aboutDiv = document.getElementById("about");
  const useDiv = document.getElementById("use");

  aboutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    aboutDiv.style.display = "block";
    useDiv.style.display = "none";
  });

  useBtn.addEventListener("click", function (e) {
    e.preventDefault();
    useDiv.style.display = "block";
    aboutDiv.style.display = "none";
  });
});

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; // true for O, false for X
let moveCount = 0;//Count move vribal
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

// Reset game
const resetGame = () => {
  turno = true;
  moveCount = 0; //reset count
  enableBoxes();
  msgContainer.classList.add("hide");
};

// Add event listener
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText !== "") return; // Prevent double click

    if (turno) {
      box.innerText = "O";
      box.classList.add("o-style");
    } else {
      box.innerText = "X";
      box.classList.add("x-style");
    }
    box.disabled = true;
    turno = !turno;
    moveCount++; //increse move count
    checkwinner();
  });
});

// Disable all boxes
const disableBoxes = () => {
  boxes.forEach((box) => box.disabled = true);
};

// Enable all boxes and remove classes
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("o-style", "x-style"); // Remove old classes
  });
};

// Show winner
const showWinner = (winner) => {
  msg.innerText = `🎉Congrats Winner👏is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Show draw
const showDraw = () => {
  msg.innerText = "😅game Draw 🙅‍♂️";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

// Check winner
const checkwinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
      showWinner(pos1val);
      return;
    }
  }

  //Check for draw
  if (moveCount === 9) {
    showDraw();
  }

};

resetBtn.addEventListener("click", resetGame);
