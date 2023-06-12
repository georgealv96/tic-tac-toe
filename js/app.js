// Representation of the board game
const board = [
  {
    taken: false,
    priorityChoices: [1, 3, 4]
  },
  {
    taken: false,
    priorityChoices: [0, 2, 3, 4, 5]
  },
  {
    taken: false,
    priorityChoices: [1, 4, 5]
  },
  {
    taken: false,
    priorityChoices: [0, 1, 4, 6, 7]
  },
  {
    taken: false,
    priorityChoices: [0, 1, 2, 3, 5, 6, 7, 8]
  },
  {
    taken: false,
    priorityChoices: [1, 2, 4, 7, 8]
  },
  {
    taken: false,
    priorityChoices: [3, 4, 7]
  },
  { taken: false, priorityChoices: [3, 4, 5, 6, 8] },
  {
    taken: false,
    priorityChoices: [4, 5, 7]
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

// Here's where the selections of the player and computer are stored
const playersSelections = []
const computersSelections = []

// Assign the container board to a variable
const boardEl = document.querySelector('.board')

// Creates the elements that are going to represent the grid of the game board
for (let i = 0; i < 9; i++) {
  const cellEl = document.createElement('div')
  const cellTextEl = document.createElement('p') //
  boardEl.append(cellEl)
  // This gives every single grid an unique number
  cellEl.setAttribute('id', i)
  cellEl.append(cellTextEl)
}

// Initialize a player's turn count (this will store the amount of times the player has gone)
let turnCount = 0

// Need to call this function until no more cells are available or until someone wins
// ***
boardEl.addEventListener('click', handleClick)

function handleClick(e) {
  // Save the player's choice
  let playersTurn = Number(e.target.getAttribute('id'))
  // If the cell that the player picked is taken
  if (board[playersTurn].taken === true) {
    // Do not allow the player to pick that same cell
    e.preventDefault()
    playersTurn = null
  } else {
    // Show the cell with an 'X' representing the player's choice
    e.target.querySelector('p').innerText = 'X'
    // Player's choice is taken so it can't be picked by anyone else during a match
    board[playersTurn].taken = true
    // Add selection to the player's list of picks
    playersSelections.push(playersTurn)
    // Increase the amount of times played by the player by one
    turnCount += 1

    if (
      turnCount >= 3 &&
      compareCombinations(winningCombinations, playersSelections)
    ) {
      console.log('hello')
    }

    // Computer picks a random number from 0 to 9
    computersTurn = Math.floor(Math.random() * 9)
    // While the computer's choice is taken and the player has played less than 5 times, do...
    while (board[computersTurn].taken && turnCount < 5) {
      // If it's taken, then pick another one
      computersTurn = Math.floor(Math.random() * 9)
    }
    // If the player has played less than 5 times, do...
    if (turnCount < 5) {
      // Store the HTML element that has an ID of the cell number the computer picked
      const computerCellEl = document.getElementById(computersTurn.toString())
      // Show the cell with an 'O' representing the computer's choice
      computerCellEl.querySelector('p').innerText = 'O'
      // Computer's choice is taken so it can't be picked by anyone else during a match
      board[computersTurn].taken = true
      // Add selection to the computer's list of picks
      computersSelections.push(computersTurn)
    }
    //
    console.log(board)
    console.log(playersSelections)
    console.log(computersSelections)
    console.log(turnCount)
    //
  }

  //
  function addSelectionToList(list, selection) {
    let num
    list.push(selection)
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i + 1] < list[i]) {
        num = list[i + 1]
        list[i + 1] = list[i]
        list[i] = num
      }
    }
  }

  // THIS NEEDS TO BE CHECKED
  function compareCombinations(winning, actual) {
    let isInCombList = false
    winning.forEach(function (combination) {
      for (let number of combination) {
        let isInCombination = false
        for (let pick of actual) {
          if (pick === number) {
            isInCombination = true
            break
          }
        }
        if (isInCombination) {
          isInCombList = true
        } else {
          isInCombList = false
          break
        }
      }
      if (isInCombList) {
        return true
      }
    })
  }
}
