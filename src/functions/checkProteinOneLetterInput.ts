import { Molecule, findMatches, sanitiseInput } from "./utilFunctions";

export const checkProteinOneLetterInput = (proteinInput: string) => {
  const protein = sanitiseInput(proteinInput);
  if (protein === '') {
    return '';
  } else {
    // if protein is in single letter format, convert to array and check for non-natural AA input
    const proteinArray = Array.from(protein);
    // check array is entirely composed of natural AAs (ARNDCEQGHILKMFPSTWYV)
    for (let resi of proteinArray) {
      if (findMatches(protein, Molecule.Protein))
        return (
          `Non-amino acid character entered, please enter only 20 natural residues.  Non-protein characters at positions: ${findMatches(protein, Molecule.Protein)}`) 
    }

    // return uppercase proteinInput if for loop exits successfully
    return protein;
  }
  
};
