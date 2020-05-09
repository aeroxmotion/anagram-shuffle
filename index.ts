'use strict'

export type Combinations = Set<string>

const WORD_SPLITTER = ''
const LETTERS_REGEX = /^[a-z]+$/i

export function getAnagramCombinations (word: string): Combinations {
  if (typeof word !== 'string' || word.length < 2) {
    throw new Error('Invalid word input')
  }

  if (!LETTERS_REGEX.test(word)) {
    throw new SyntaxError('Only english letters accepted')
  }

  const combinations: Combinations = new Set()
  const letters = word.split(WORD_SPLITTER)

  addCombinationsByShuffle('', letters, combinations)
  return combinations
}

function addCombinationsByShuffle (starting: string, letters: string[], combinations: Combinations) {
  if (!letters.length) {
    combinations.add(starting)
    return
  }

  for (let i = 0; i < letters.length; i++) {
    addCombinationsByShuffle(
      starting + letters[i],
      letters.filter((_, index) => index !== i), 
      combinations
    )
  }
}
