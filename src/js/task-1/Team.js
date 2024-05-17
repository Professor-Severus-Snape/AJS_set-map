export default class Team {
  constructor() {
    // this - это экземпляр класса Team
    // this.members - это экземпляр класса Set
    this.members = new Set();
  }

  add(character) { // метод экземпляра класса Team
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в списке');
    }
    this.members.add(character); // метод экземпляра класса Set
  }

  addAll(...characters) {
    characters.forEach((character) => this.members.add(character));
  }

  toArray() {
    return [...this.members];
  }
}
