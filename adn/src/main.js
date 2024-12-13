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
// console.log(codons);

// Étape 2 : convertir les nucléotides en protéines grâce à une table de conversion
const conversionTable = {
  ATA: "I",
  ATC: "I",
  ATT: "I",
  ATG: "M",
  ACA: "T",
  ACC: "T",
  ACG: "T",
  ACT: "T",
  AAC: "N",
  AAT: "N",
  AAA: "K",
  AAG: "K",
  AGC: "S",
  AGT: "S",
  AGA: "R",
  AGG: "R",
  CTA: "L",
  CTC: "L",
  CTG: "L",
  CTT: "L",
  CCA: "P",
  CCC: "P",
  CCG: "P",
  CCT: "P",
  CAC: "H",
  CAT: "H",
  CAA: "Q",
  CAG: "Q",
  CGA: "R",
  CGC: "R",
  CGG: "R",
  CGT: "R",
  GTA: "V",
  GTC: "V",
  GTG: "V",
  GTT: "V",
  GCA: "A",
  GCC: "A",
  GCG: "A",
  GCT: "A",
  GAC: "D",
  GAT: "D",
  GAA: "E",
  GAG: "E",
  GGA: "G",
  GGC: "G",
  GGG: "G",
  GGT: "G",
  TCA: "S",
  TCC: "S",
  TCG: "S",
  TCT: "S",
  TTC: "F",
  TTT: "F",
  TTA: "L",
  TTG: "L",
  TAC: "Y",
  TAT: "Y",
  TAA: "_",
  TAG: "_",
  TGC: "C",
  TGT: "C",
  TGA: "_",
  TGG: "W",
};

let proteines = "";
for (let i = 0; i < codons.length; i++) {
  proteines += conversionTable[codons[i]];
}
console.log(proteines);
