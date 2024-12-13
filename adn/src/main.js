import { readFileSync } from "fs";
let text = readFileSync("adn/adn.txt").toString().split("\n")[0];
// console.log(text);

// Étape A.1 : découper le fichier en codons tant qu'il reste au moins 3 nucléotides
const codons = [];
let textToSlice = text;
while (textToSlice.length >= 3) {
  let i = 0;
  let codon = textToSlice.slice(i, i + 3);
  codons.push(codon);
  textToSlice = textToSlice.slice(i + 3, textToSlice.length);
}
// console.log(codons);

// Étape A.2 : convertir les nucléotides en protéines grâce à une table de conversion
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
// console.log(proteines);

// Étape B.1 : découper le fichier en tableau de 25 éléments
const sequences = [];
let newTextToSlice = text;
while (newTextToSlice.length > 0) {
  let i = 0;
  let sequence = newTextToSlice.slice(i, i + 25);
  sequences.push(sequence);
  newTextToSlice = newTextToSlice.slice(i + 25, newTextToSlice.length);
}
console.log(sequences);
