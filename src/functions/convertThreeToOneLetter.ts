import { aaThreeOneLetterNames } from './lookupTables';
import { sanitiseThreeLetterInput } from './utilFunctions/sanitiseThreeLetterInput';

export const convertThreeToOneLetter = (proteinInput: string) => {
  const protein = sanitiseThreeLetterInput(proteinInput);
  // create proteinArray in three character slices
  let proteinArray = [];
  for (let i = 0; i < protein.length; i += 3) {
    proteinArray.push(protein.substring(i, i + 3));
  }

  const oneLetterArr: string[] = [];
  proteinArray.map((resi) => {
    return oneLetterArr.push(aaThreeOneLetterNames[resi]);
  });
  const oneLetterStr = oneLetterArr.join('');
  return oneLetterStr;
};
