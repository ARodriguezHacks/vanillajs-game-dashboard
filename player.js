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

// export { playerAngie };

// createRecipe();

// const createRecipe = () => {
//   const recipe = "Meatballs";
//   return `I want to order ${recipe}`;
// };
