import { findMatches } from './utilFunctions/findMatches';
import type { Molecule } from '../types';


export const checkRnaInput = (
  rnaInput: string,
  molecule: Molecule 
) => {
  if (rnaInput === '') {
    return '';
  } else {
    // convert to array
    const dnaArray = Array.from(rnaInput);
    // check array is entirely composed of ACGU
    for (let nt of dnaArray) {
      if (nt.match(/[^ACGU]/))
      {const invalidRna =  findMatches(
        rnaInput,
        molecule
      )
      return invalidRna;
    }
 
    }
    // return dnaUpper if for loop exits successfully
    return rnaInput;
  }
};
