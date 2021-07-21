function Player(name, score = 0) {
  this.name = name;
  this.score = score;
}

const playerAngie = new Player("Angie");

console.log(playerAngie.name);

class Game {
  constructor(name) {
    this.name = name;
  }
}

const newGame = new Game("Scrabble");

console.log(newGame);

// Var

var greeting = "Say Hi";
var times = 4;

if (times > 3) {
  var greeting = "say Hello instead";
  let farewell = "Bye!";
}
// let will throw an error because let has block scoping

// console.log(greeting);
// console.log(farewell);

function hello() {
  var something = "¿Qué cosa?";
}
// error because the var is in function scope

// console.log(something);

// console.log(person);

// let person = "Josh";

// console.log(petDog);

// var petDog = "Froggy";

const person = {
  name: "Fry",
  profession: "Delivery Boy",
};
console.log(person.name);
// Fry
person.name = "Bender";
console.log(person.name);
// Bender

export { playerAngie };

// function orderPizza() {
//   let mainTopping = "Pepperoni";
//   let secondTopping = "Anchovies";
//   return `I want to order a pizza with ${mainTopping} and ${secondTopping}, please.`;
// }

// if (1 > 0) {
//   let;
// }

// const value = orderPizza();
// console.log(value);

// console.log(mainTopping);
