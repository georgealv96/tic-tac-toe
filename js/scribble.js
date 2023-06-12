const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const actual = [2, 1, 0]

console.log(compareCombinations(winning, actual))

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

// NEEDS TO BE CHECKED!
