import { aaThreeOneLetterNames } from './lookupTables';
import { sanitiseInput } from './utilFunctions';

export const convertThreeToOneLetter = (proteinInput: string) => {
  const protein = sanitiseInput(proteinInput);

  // create proteinArray in three character slices
  let proteinArray = [];
  for (let i = 0; i < protein.length; i += 3) {
    proteinArray.push(protein.substring(i, i + 3));
  }

  const oneLetterArr: string[] = [];
  proteinArray.map((pos) => {
    return oneLetterArr.push(aaThreeOneLetterNames[pos]);
  });
  const oneLetterStr = oneLetterArr.join('');
  return oneLetterStr;
};

