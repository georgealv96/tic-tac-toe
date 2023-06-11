// Representation of the board game
const board = [
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  {
    taken: false,
    whoPlayed: ''
  },
  { taken: false, whoPlayed: '' },
  {
    taken: false,
    whoPlayed: ''
  }
]

// Here's a list of the winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

// Assign the container board to a variable
const boardEl = document.querySelector('.board')

// Creates the elements that are going to represent the grid of the game board
for (let i = 0; i < 9; i++) {
  const cellEl = document.createElement('div')
  boardEl.append(cellEl)
  // This gives every single grid an unique number
  cellEl.setAttribute('id', i)
}

// When a cell gets clicked on
boardEl.addEventListener('click', handleClick)

function handleClick(e) {
  // Save the player's choice
  let playersPlay = Number(e.target.getAttribute('id'))
  // If the cell that the player picked is taken
  if (board[playersPlay].taken === true) {
    // Do not allow the player to pick that same cell
    e.preventDefault()
    playersPlay = null
  } else {
    // Show the cell with an 'X' representing the player's choice
    // ***
    board[playersPlay].taken = true
    // Computer picks a random number from 0 to 9
    let computersPlay = Math.floor(Math.random() * 9)
    // Check if the computer's choice is taken or not
    while (board[computersPlay].taken) {
      // If it's taken, then pick another one
      computersPlay = Math.floor(Math.random() * 9)
    }
    board[computersPlay].taken = true
  }
}
