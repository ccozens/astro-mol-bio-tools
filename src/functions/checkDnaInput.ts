import { findMatches } from "./utilFunctions";
import type { Molecule } from "../types";

export const checkDnaInput = (dnaInput: string, molecule: Molecule) => {
  if (dnaInput === '') {
    return '';
  } else {
    // convert to array
    const dnaArray = Array.from(dnaInput);
    // check array is entirely composed of ACTG
    for (let nt of dnaArray) {
      if (nt.match(/[^ACGT]/))
        return `Non-DNA character entered, please enter ATCG only.  Non-DNA characters at positions: ${ findMatches(dnaInput, molecule
        )}.`;
    }
    // return dnaUpper if for loop exits successfully
    return dnaInput;
  }
};
