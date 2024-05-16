export default class Character {
  constructor(name, type) {
    if (!name || typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Ошибка в параметре name');
    }

    const types = [
      'Bowman',
      'Daemon',
      'Magician',
      'Swordsman',
      'Undead',
      'Zombie',
    ];

    if (!types.some((item) => item === type)) {
      throw new Error('Ошибка в параметре type');
    }

    this.name = name;
    this.type = type;
  }
}
