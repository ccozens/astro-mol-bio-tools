import { findMatches } from './utilFunctions/findMatches';
import type { Molecule } from '../types';
import { sanitiseInput } from './utilFunctions/sanitiseInput';

export const checkProteinOneLetterInput = (
  proteinInput: string,
  molecule: Molecule
) => {
  if (proteinInput === '') return '';
  else {
    const protein = sanitiseInput(proteinInput);
    // if protein is in single letter format, convert to array and check for non-natural AA input
    const proteinArray = Array.from(protein);
    const aminoAcids = /[^ARNDCEQGHILKMFPSTWYV]/;
    for (let resi of proteinArray) {
      if (resi.match(aminoAcids)) {
        const invalidAminoAcids = findMatches(proteinInput, molecule);
        return invalidAminoAcids;
      }
    }
    // return proteinInput if no invalid AAs detected
    return proteinInput;
  }
};
