import createNumericalIndex from './createNumericalIndex';

test('index 0 to equal 00', () => {
  expect(createNumericalIndex(0, 10)).toBe('00');
});

test('index 0 to equal 000', () => {
  expect(createNumericalIndex(0, 133)).toBe('000');
});

test('index 10 to equal 10', () => {
  expect(createNumericalIndex(10, 80)).toBe('10');
});

test('index 124 to equal 124', () => {
  expect(createNumericalIndex(124, 999)).toBe('124');
});

test('index 124 to equal 0124', () => {
  expect(createNumericalIndex(124, 1000)).toBe('0124');
});

test('index 13 to equal 00013', () => {
  expect(createNumericalIndex(13, 80000)).toBe('00013');
});

test('index 999 to equal 999', () => {
  expect(createNumericalIndex(999, 999)).toBe('999');
});
