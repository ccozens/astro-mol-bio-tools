import { findMatches } from './utilFunctions';
import { Molecule } from '../types';

export const checkProteinOneLetterInput = (proteinInput: string) => {

    // if protein is in single letter format, convert to array and check for non-natural AA input
    const proteinArray = Array.from(proteinInput);
    // check array is entirely composed of natural AAs (ARNDCEQGHILKMFPSTWYV)
    for (let resi of proteinArray) {
      if (findMatches(proteinInput, Molecule.Protein))
        return (
          `Non-amino acid character entered, please enter only 20 natural residues.  Non-protein characters at positions: ${findMatches(proteinInput, Molecule.Protein)}`) 
    }

    // return uppercase proteinInput if for loop exits successfully
    return proteinInput;
  
  
};
