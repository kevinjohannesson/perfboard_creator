// const createAlphabeticalIndex = require('./createAlphabeticalIndex');
import createAlphabeticalIndex from './createAlphabeticalIndex';

test('index 0 to equal A', () => {
  expect(createAlphabeticalIndex(0)).toBe('A');
});
test('index 5 to equal F', () => {
  expect(createAlphabeticalIndex(5)).toBe('F');
});
test('index 26 to equal AA', () => {
  expect(createAlphabeticalIndex(26)).toBe('AA');
});
test('index 42 to equal AQ', () => {
  expect(createAlphabeticalIndex(42)).toBe('AQ');
});
test('index 51 to equal AZ', () => {
  expect(createAlphabeticalIndex(51)).toBe('AZ');
});
test('index 52 to equal BA', () => {
  expect(createAlphabeticalIndex(52)).toBe('BA');
});