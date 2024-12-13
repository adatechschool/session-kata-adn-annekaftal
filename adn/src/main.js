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
// console.log(sequences);

// Étape B.2 : découper le tableau en sous-tableaux de 5 x 5 éléments
const subGroups = [];
for (let i = 0; i < sequences.length; i++) {
  let sequenceToSlice = sequences[i];
  let subSequence = [];
  while (sequenceToSlice.length > 0) {
    let j = 0;
    let subElement = sequenceToSlice.slice(j, j + 5);
    subSequence.push(subElement);
    sequenceToSlice = sequenceToSlice.slice(j + 5, sequenceToSlice.length);
  }
  subGroups.push(subSequence);
}
// console.log(subGroups);

// Étape B.3 : trouver les récurrences
function getRecurrences(arr) {
  let a = [];
  let c = [];
  let g = [];
  let t = [];
  for (let i = 0; i < 5; i++) {
    let aCount = 0;
    let cCount = 0;
    let gCount = 0;
    let tCount = 0;
    for (let j = 0; j < 5; j++) {
      if (arr[j][i] === "A") {
        aCount += 1;
      } else if (arr[j][i] === "C") {
        cCount += 1;
      } else if (arr[j][i] === "G") {
        gCount += 1;
      } else if (arr[j][i] === "T") {
        tCount += 1;
      }
    }
    a.push(aCount);
    c.push(cCount);
    g.push(gCount);
    t.push(tCount);
  }
  const recurrences = { a, c, g, t };
  return recurrences;
}

const sequenceRecurrences = getRecurrences(subGroups[0]);
console.log(sequenceRecurrences);
