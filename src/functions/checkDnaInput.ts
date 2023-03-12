import { findMatches } from './utilFunctions/findMatches';
import type { Molecule } from '../types';


export const checkDnaInput = (
  dnaInput: string,
  molecule: Molecule 
) => {
  if (dnaInput === '') {
    return '';
  } else {
    // convert to array
    const dnaArray = Array.from(dnaInput);
    // check array is entirely composed of ACTG
    for (let nt of dnaArray) {
      if (nt.match(/[^ACGT]/))
      {const invalidDna =  findMatches(
        dnaInput,
        molecule
      )
      return invalidDna;
    }
 
    }
    // return dnaUpper if for loop exits successfully
    return dnaInput;
  }
};
