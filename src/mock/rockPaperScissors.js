const rockPaperScissors = (player1, player2) => {
  const PAPER = 'PAPER' // 🪨
  const ROCK = 'ROCK' // 🧾
  const SCISSORS = 'SCISSORS' // ✂️

  let player1Tool = null
  let player2Tool = null

  function generateUserTool() {
    const chanceNumber = Math.round(Math.random() * (3 - 1) + 1)

    switch (chanceNumber) {
      case 1:
        return PAPER
      case 2:
        return ROCK
      case 3:
        return SCISSORS
    }
  }

  player1Tool = generateUserTool()
  player2Tool = generateUserTool()

  if (player1Tool === player2Tool) {
    return 'even'
  }

  if (
    (player1Tool === PAPER && player2Tool === ROCK) ||
    (player1Tool === ROCK && player2Tool === SCISSORS) ||
    (player1Tool === SCISSORS && player2Tool === PAPER)
  ) {
    return player1
  } else {
    return player2
  }
}

module.exports = { rockPaperScissors }
