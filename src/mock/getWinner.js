const { rockPaperScissors } = require("./rockPaperScissors");

const getWinner = (player1, player2) => {
  const numberToWin = 3;
  let player1Score = 0;
  let player2Score = 0;

  while (player1Score < numberToWin && player2Score < numberToWin) {
    const result = rockPaperScissors(player1, player2);
    if (result === player1) player1Score++;
    if (result === player2) player2Score++;
  }

  if (player1Score > player2Score) {
    return player1;
  } else {
    return player2;
  }
};

module.exports = { getWinner };
