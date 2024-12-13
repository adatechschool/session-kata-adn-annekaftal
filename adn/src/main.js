import { readFileSync } from "fs";
const text = readFileSync("adn/adn.txt").toString().split("\n");
console.log(text);
