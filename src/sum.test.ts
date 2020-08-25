import sum from './sum';

test('expect 0 + 10 to equal 10', () => {
  expect(sum(0, 10)).toBe(10);
});

test('expect 5 + 5 to equal 10', () => {
  expect(sum(5, 5)).toBe(10);
});

test('expect 3 + 4 to equal 7', () => {
  expect(sum(3, 4)).toBe(7);
});