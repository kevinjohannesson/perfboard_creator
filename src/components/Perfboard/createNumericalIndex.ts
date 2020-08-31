// Converts a numerical index (IE 17) in a leading zero string 
// based on the maximum index (IE '0017' at 1000 max)
export default function createNumericalIndex (index: number, maxIndex: number): string {
  const indexTotalNumbers = getTotalNumbers(index);
  const maxTotalNumbers = getTotalNumbers(maxIndex);
  const number = [...new Array(maxTotalNumbers - indexTotalNumbers).fill(0), index].join('');
  return number;
}

const getTotalNumbers = (num: number) => num.toString().length;

// createNumericalIndex(1, 10);