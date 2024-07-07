const newGame = document.querySelector(".try");
let currentScore1 = document.querySelector(".current-score1");
let currentScore2 = document.querySelector(".current-score2");
let totalScore1 = document.querySelector(".total-score1");
let totalScore2 = document.querySelector(".total-score2");
const diceRoll = document.querySelector(".roll");
const hold = document.querySelector(".hold");
let image = document.querySelector(".img");
let currentPlayer = 1;
let gameOver = false;

newGame.onclick = function () {
  totalScore1.textContent = 0;
  currentScore1.textContent = 0;
  totalScore2.textContent = 0;
  currentScore2.textContent = 0;
  gameOver = false;
  document.querySelector(".form2").style.backgroundColor = "#FFFFFF4C";
  document.querySelector(".form1").style.backgroundColor = "#FFFFFFB2";
  document.querySelector(".player1").textContent = "PLAYER 1";
  document.querySelector(".player2").textContent = "PLAYER 2";
};
hold.onclick = function () {
  if (
    parseInt(totalScore1.textContent) >= 100 ||
    parseInt(totalScore2.textContent) >= 100
  ) {
    if (parseInt(totalScore1.textContent) >= 100) {
      document.querySelector(".form1").style.backgroundColor = "#00A36C";
      document.querySelector(".player1").textContent = "PLAYER 1 WINS !!";
      var end = Date.now() + 15 * 1000;

      var colors = ["#bb0000", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      gameOver = true;
    } else {
      document.querySelector(".form2").style.backgroundColor = "#00A36C";
      document.querySelector(".player2").textContent = "PLAYER 2 WINS !!";
      var end = Date.now() + 15 * 1000;

      var colors = ["#bb0000", "#ffffff"];

      (function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();

      gameOver = true;
    }
  } else {
    if (currentPlayer === 1) {
      currentPlayer = 2;
      document.querySelector(".form2").style.backgroundColor = "#FFFFFFB2";
      document.querySelector(".form1").style.backgroundColor = "#FFFFFF4C";
      totalScore1.textContent =
        parseInt(totalScore1.textContent) + parseInt(currentScore1.textContent);
      currentScore1.textContent = 0;
    } else {
      currentPlayer = 1;
      document.querySelector(".form1").style.backgroundColor = "#FFFFFFB2";
      document.querySelector(".form2").style.backgroundColor = "#FFFFFF4C";
      totalScore2.textContent =
        parseInt(totalScore2.textContent) + parseInt(currentScore2.textContent);
      currentScore2.textContent = 0;
    }
  }
};

diceRoll.onclick = function () {
  if (gameOver === false) {
    let random = Math.floor(Math.random() * 6) + 1;

    if (currentPlayer === 1 && parseInt(totalScore1.textContent) < 100) {
      switch (random) {
        case 1:
          image.src = "dice-1.png";

          currentScore1.textContent = 0;
          document.querySelector(".form2").style.backgroundColor = "#FFFFFFB2";
          document.querySelector(".form1").style.backgroundColor = "#FFFFFF4C";
          currentPlayer = 2;
          break;

        case 2:
          image.src = "dice-2.png";
          currentScore1.textContent = parseInt(currentScore1.textContent) + 2;
          break;

        case 3:
          image.src = "dice-3.png";

          currentScore1.textContent = parseInt(currentScore1.textContent) + 3;
          break;
        case 4:
          image.src = "dice-4.png";

          currentScore1.textContent = parseInt(currentScore1.textContent) + 4;
          break;
        case 5:
          image.src = "dice-5.png";

          currentScore1.textContent = parseInt(currentScore1.textContent) + 5;
          break;
        case 6:
          image.src = "dice-6.png";

          currentScore1.textContent = parseInt(currentScore1.textContent) + 6;
          break;
        default:
          console.error("Unexpected random number:", random);
      }
    } else if (currentPlayer === 2 && parseInt(totalScore2.textContent) < 100) {
      switch (random) {
        case 1:
          image.src = "dice-1.png";

          currentScore2.textContent = 0;
          document.querySelector(".form1").style.backgroundColor = "#FFFFFFB2";
          document.querySelector(".form2").style.backgroundColor = "#FFFFFF4C";
          currentPlayer = 1;
          break;

        case 2:
          image.src = "dice-2.png";
          currentScore2.textContent = parseInt(currentScore2.textContent) + 2;
          break;

        case 3:
          image.src = "dice-3.png";

          currentScore2.textContent = parseInt(currentScore2.textContent) + 3;
          break;
        case 4:
          image.src = "dice-4.png";

          currentScore2.textContent = parseInt(currentScore2.textContent) + 4;
          break;
        case 5:
          image.src = "dice-5.png";

          currentScore2.textContent = parseInt(currentScore2.textContent) + 5;
          break;
        case 6:
          image.src = "dice-6.png";

          currentScore2.textContent = parseInt(currentScore2.textContent) + 6;
          break;
        default:
          console.error("Unexpected random number:", random);
      }
    }
  }
};
