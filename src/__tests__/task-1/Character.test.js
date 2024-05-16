import Character from '../../js/task-1/Character';

test('testing of character creation without parameters', () => {
  expect(() => new Character()).toThrowError();
});

test('testing of character creation with invalid name parameter (not a string)', () => {
  expect(() => new Character(123)).toThrowError();
});

test('testing of character creation with invalid name parameter (length < 2)', () => {
  expect(() => new Character('л')).toThrowError();
});

test('testing of character creation with invalid name parameter (length > 10)', () => {
  expect(() => new Character('лучник_лучник')).toThrowError();
});

test('testing of character creation with invalid type parameter', () => {
  expect(() => new Character('не лучник', 'Not a Bowman')).toThrowError();
});
