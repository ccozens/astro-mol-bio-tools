import { aaThreeOneLetterNames } from './lookupTables';
import { sanitiseInput } from './utilFunctions';

export const checkProteinThreeLetterInput = (
  proteinInput: string
) => {
  if (proteinInput === '') {
    return '';
  } else {
    const protein = sanitiseInput(proteinInput);

    // convert to three letter array
    const proteinArray = [];
    for (let i = 0; i < protein.length; i += 3) {
      proteinArray.push(protein.substring(i, i + 3));
    }

    // sanitiseInput capitalises whole string, so return chars 1+2 of each triplet to lower case
    const titleCase = proteinArray.map(
      (aa) => aa[0] + aa[1].toLowerCase() + aa[2].toLowerCase()
    );

    // check for non-AA content
    const allThreeLetter = Object.keys(aaThreeOneLetterNames);

    const wrongInput = titleCase.filter(
      (resi) => !allThreeLetter.includes(resi)
    );
    let wrongInputPositions = [];
    for (let i in wrongInput) {
      wrongInputPositions.push(titleCase.indexOf(wrongInput[i]) + 1);
    }

    const errorMessage = `Non-amino acid character entered, please enter only 20 natural residues in three letter format.  Non-protein characters at positions: ${wrongInputPositions.join(
      ', '
    )}`;

    // return unchanged proteinInput if for loop exits successfully
    return wrongInput.length > 0 ? errorMessage : titleCase.join('');
  }
};
