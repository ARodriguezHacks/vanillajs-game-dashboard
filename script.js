import { playerAngie } from "./player.js";

const header = document.getElementById("header");
const nav = document.getElementById("nav");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const greeting = document.createElement("h2");

greeting.textContent = `Welcome ${playerAngie.name}!`;

header.appendChild(greeting);
console.log(header);

console.log(playerAngie);
// const loadPlayer = function() {

// }
