'use strict'

export type Combinations = Set<string>

const WORD_SPLITTER = ''
const LETTERS_REGEX = /^[a-z]+$/i

export function getAnagramCombinations (word: string): Combinations {
  if (!LETTERS_REGEX.test(word)) {
    throw new SyntaxError('Only english letters accepted')
  }

  if (typeof word !== 'string' || word.length < 2) {
    throw new Error('Invalid word input')
  }

  const combinations: Combinations = new Set()
  const letters = word.split(WORD_SPLITTER)

  addCombinationsByShuffle('', letters, combinations)
  return combinations
}

export function addCombinationsByShuffle (starting: string, letters: string[], combinations: Combinations) {
  if (!letters.length) {
    combinations.add(starting)
    return
  }

  for (let i = 0; i < letters.length; i++) {
    const newLetters = letters.slice()
    newLetters.splice(i, 1)

    addCombinationsByShuffle(
      starting + letters[i],
      newLetters, 
      combinations
    )
  }
}
