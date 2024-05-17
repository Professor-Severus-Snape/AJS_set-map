import Settings from '../../js/task-3/Settings';

test('testing settings without setter', () => {
  const settings = new Settings();

  const expected = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);

  expect(settings.appearance).toEqual(expected);
});

test('testing settings with setter and unvalid key-value', () => {
  const settings = new Settings();
  settings.appearance = { theme: 'light', WTF: 'WTF', music: 'chillout' };

  const expected = new Map([
    ['theme', 'light'],
    ['music', 'chillout'],
    ['difficulty', 'easy'],
  ]);

  expect(settings.appearance).toEqual(expected);
});
