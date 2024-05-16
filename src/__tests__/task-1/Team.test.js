import Character from '../../js/task-1/Character';
import Team from '../../js/task-1/Team';

test('testing .add() method with new characters', () => {
  const bowman = new Character('лучник', 'Bowman'); // экземпляр класса Character
  const daemon = new Character('демон', 'Daemon'); // экземпляр класса Character
  const teamSet = new Team(); // экземпляр класса Team (set из персонажей)

  teamSet.add(bowman); // добавление одного персонажа
  teamSet.add(daemon); // добавление ещё одного персонажа

  const expected = {
    members: new Set([
      { name: 'лучник', type: 'Bowman' }, // NOTE: почему здесь не важна последовательность ???
      { name: 'демон', type: 'Daemon' },
      // { name: 'лучник', type: 'Bowman' }, // NOTE: почему здесь не важна последовательность ???
    ]),
  };

  expect(teamSet).toEqual(expected);
});

test('testing .add() method with currently added characters', () => {
  const magician = new Character('маг', 'Magician');
  const teamSet = new Team();
  teamSet.add(magician); // добавление одного персонажа
  expect(() => teamSet.add(magician)).toThrowError(); // повторное добавление того же персонажа
});

test('testing .addAll() method', () => {
  const swordsman = new Character('мечник', 'Swordsman');
  const undead = new Character('нежить', 'Undead');
  const zombie = new Character('зомби', 'Zombie');
  const teamSet = new Team();

  teamSet.addAll(swordsman, undead, zombie, undead); // добавление неск.персонажей (undead - 2раза)

  const expected = {
    members: new Set([
      { name: 'мечник', type: 'Swordsman' },
      { name: 'нежить', type: 'Undead' }, // NOTE: почему здесь не важна последовательность ???
      { name: 'зомби', type: 'Zombie' },
      // { name: 'нежить', type: 'Undead' }, // NOTE: почему здесь не важна последовательность ???
    ]),
  };

  expect(teamSet).toEqual(expected);
});

test('testing .toArray() method', () => {
  const bowman = new Character('лучник', 'Bowman');
  const daemon = new Character('демон', 'Daemon');
  const magician = new Character('маг', 'Magician');
  const swordsman = new Character('мечник', 'Swordsman');
  const undead = new Character('нежить', 'Undead');
  const zombie = new Character('зомби', 'Zombie');
  const teamSet = new Team();

  teamSet.addAll(bowman, daemon, magician, swordsman, undead, zombie); // добавление неск.персонажей

  const expected = [
    { name: 'лучник', type: 'Bowman' },
    { name: 'демон', type: 'Daemon' },
    { name: 'маг', type: 'Magician' },
    { name: 'мечник', type: 'Swordsman' },
    { name: 'нежить', type: 'Undead' },
    { name: 'зомби', type: 'Zombie' },
  ];

  expect(teamSet.toArray()).toEqual(expected);
});
