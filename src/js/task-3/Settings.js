export default class Settings {
  constructor() {
    // все возможные настройки:
    this.allSettings = new Map([
      ['theme', ['dark', 'light', 'gray']],
      ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
      ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
    ]);

    // дефолтные настройки:
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
  }

  // сеттер, получающий на вход обычный объект:
  set appearance(settings) {
    // настройки пользователя:
    this.usersSettings = new Map();

    Object.entries(settings).forEach(([key, value]) => {
      if (this.allSettings.has(key) && this.allSettings.get(key).includes(value)) {
        this.usersSettings.set(key, value);
      }
    });
  }

  // геттер, возвращающий конечные настройки для юзера:
  get appearance() {
    if (this.usersSettings) {
      const result = new Map();
      this.defaultSettings.forEach((value, key) => result.set(key, value));
      this.usersSettings.forEach((value, key) => result.set(key, value));
      return result;
    }
    return this.defaultSettings;
  }
}
