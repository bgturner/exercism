//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteinMap = {
  Methionine: ["AUG"],
  Phenylalanine: ["UUU", "UUC"],
  Leucine: ["UUA", "UUG"],
  Serine: ["UCU", "UCC", "UCA", "UCG"],
  Tyrosine: ["UAU", "UAC"],
  Cysteine: ["UGU", "UGC"],
  Tryptophan: ["UGG"],
};

const isStopCodon = (codon) => {
  return ["UAA", "UAG", "UGA"].includes(codon);
};

/*
 * For a given codon, return the associated protein.
 */
const parseCodon = (codon) => {
  for (const [protein, codons] of Object.entries(proteinMap)) {
    if (codons.includes(codon)) return protein;
  }
  throw new Error("Invalid codon");
};

/*
 * Translates a string representation of codons into an array of proteins.
 */
export const translate = (codonString = null) => {
  if (codonString === null) return [];
  const proteins = [];

  /*
   * Split a string of codons into an array of three-char codons.
   */
  const codons = codonString.match(/.{1,3}/g);

  /*
   * Generate the array of proteins from the codons array.
   */
  for (var i = 0; i < codons.length && !isStopCodon(codons[i]); i++) {
    proteins.push(parseCodon(codons[i]));
  }

  return proteins;
};
