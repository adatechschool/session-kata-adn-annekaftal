import { log } from "console";
import { readFileSync } from "fs";
let text = readFileSync("adn/adn.txt").toString().split("\n")[0];
// console.log(text);

// Étape 1 : découper le fichier en codons tant qu'il reste au moins 3 nucléotides
const codons = [];
while (text.length >= 3) {
  let i = 0;
  let codon = text[i] + text[i + 1] + text[i + 2];
  codons.push(codon);
  text = text.slice(i + 3, text.length);
}
console.log(codons);
