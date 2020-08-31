// Converts a numerical index into an alphabetical index string. IE: 0 -> A, 25 -> Z, 26 -> AA etc.
export default function createAlphabeticalIndex(initialNumericalIndex: number): string{
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const alphabeticalIndex = [alphabet[initialNumericalIndex % 26]];
  let currentNumericalIndex = initialNumericalIndex - (initialNumericalIndex % 26);
  while(currentNumericalIndex >= 26){
    currentNumericalIndex = currentNumericalIndex / 26;
    const letter = alphabet[Math.floor(currentNumericalIndex % 26) - 1];
    alphabeticalIndex.unshift(letter);
  }
  return alphabeticalIndex.join('');
}

// createAlphabeticalIndex(5)