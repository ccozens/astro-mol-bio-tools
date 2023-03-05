import { findMatches, Molecule } from "./utilFunctions";

export const checkDnaInput = (dna: string, molecule: Molecule) => {
  if (dna === '') {
    return '';
  } else {
    //remove any line breaks
    dna = dna.replace(/[\r\n]/gm, '');
    // ensure input uppercase
    const dnaUpper = dna.toUpperCase();
    // convert to array
    const dnaUpperArray = Array.from(dnaUpper);
    // check array is entirely composed of ACTG
    for (let nt of dnaUpperArray) {
      if (nt.match(/[^ACGT]/))
        return `Non-DNA character entered, please enter ATCG only.  Non-DNA characters at positions: ${ findMatches(
          dna, molecule
        )}`;
    }
    // return dnaUpper if for loop exits successfully
    return dnaUpper;
  }
};
