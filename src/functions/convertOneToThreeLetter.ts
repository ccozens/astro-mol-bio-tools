import { aaOneThreeLetterNames } from './lookupTables';
import { sanitiseInput } from './utilFunctions';

export const convertOneToThreeLetter = (proteinInput: string) => {
  const protein = sanitiseInput(proteinInput);
  // create proteinArray
  const oneLetterArray = Array.from(protein);
  const threeLetterArray: string[] = [];
  oneLetterArray.map((pos) => {
    threeLetterArray.push(aaOneThreeLetterNames[pos]);
  });
  const threeLetterStr = threeLetterArray.join('');
  return threeLetterStr;
};
