import { checkDnaInput } from './checkDnaInput';
import { Molecule } from '../types';
import { formatChooserStore } from '../stores/formatChooserStore';

import {
  codonToAATableOneLetter,
  codonToAATableThreeLetter,
} from './lookupTables';

export const translateDna = (sanitisedInputFromStore: string) => {
  // check input
  const checkedInput = checkDnaInput(
    sanitisedInputFromStore,
    Molecule.Dna
  );
  if (checkedInput.includes('Non-DNA')) {
    return checkedInput;
  }
  const checkForTriplets = (dna: string) => {
    return dna.length % 3 === 0 ? true : false;
  };

  // get format and joiner
  const { outFormat, spacer } = formatChooserStore.get();
  let protein = [];

  if (checkForTriplets(sanitisedInputFromStore) === false) {
    return 'DNA is not in triplets - please input sequence with complete triplets.';
  } else {
    // split into triplets
    const tripletArray: string[] = [];
    for (let i = 0; i < sanitisedInputFromStore.length; i += 3) {
      tripletArray.push(sanitisedInputFromStore.substring(i, i + 3));
    }
    if (outFormat === 'threeLetter') {
      // look up codons
      for (let triplet of tripletArray) {
        protein.push(codonToAATableThreeLetter[triplet]);
      }
    } else {
      if (outFormat === 'oneLetter')
        for (let triplet of tripletArray) {
          protein.push(codonToAATableOneLetter[triplet]);
        }
    }
  }
  return protein.join(spacer);
};
