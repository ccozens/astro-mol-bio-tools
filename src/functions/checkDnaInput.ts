import { findMatches, Molecule, sanitiseInput } from "./utilFunctions";

export const checkDnaInput = (dnaInput: string, molecule: Molecule) => {
  if (dnaInput === '') {
    return '';
  } else {
    const dna = sanitiseInput(dnaInput);
    // convert to array
    const dnaArray = Array.from(dna);
    // check array is entirely composed of ACTG
    for (let nt of dnaArray) {
      if (nt.match(/[^ACGT]/))
        return `Non-DNA character entered, please enter ATCG only.  Non-DNA characters at positions: ${ findMatches(
          dna, molecule
        )}`;
    }
    // return dnaUpper if for loop exits successfully
    return dna;
  }
};
