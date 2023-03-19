import { aaThreeOneLetterNames } from './lookupTables';
import { sanitiseThreeLetterInput } from './utilFunctions/sanitiseThreeLetterInput';

export const checkProteinThreeLetterInput = (
  proteinInput: string
) => {
  if (proteinInput === '') {
    return '';
  } else {
    const sanitisedInput = sanitiseThreeLetterInput(proteinInput);
    // convert to three letter array
    const proteinArray = [];
    for (let i = 0; i < sanitisedInput.length; i += 3) {
      proteinArray.push(sanitisedInput.substring(i, i + 3));
    }

    // check for non-AA content
    const allThreeLetter = Object.keys(aaThreeOneLetterNames);

    const wrongInput = proteinArray.filter(
      (resi) => !allThreeLetter.includes(resi)
    );
    console.log(wrongInput);
    let wrongInputPositions = [];
    for (let resi in wrongInput) {
      wrongInputPositions.push(proteinArray.indexOf(wrongInput[resi]) + 1);
      return wrongInputPositions.join(', ');
    }

    // return unchanged proteinInput if for loop exits successfully
    return proteinInput;
  }
};
