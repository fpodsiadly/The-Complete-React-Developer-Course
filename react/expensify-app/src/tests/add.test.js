const add = (a, b) => a + b;
const generatorGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generatorGreeting('Filip');
  expect(result).toBe('Hello Filip!')
});

test('should generate greeting for no name', () => {
  const result = generatorGreeting();
  expect(result).toBe('Hello Anonymous!');
});