import {
  codonToAATableOneLetter,
  codonToAATableThreeLetter,
} from './lookupTables';

export const translateDna = (
  dna: string,
  outFormat: string,
  proteinJoin: string
) => {
  
  const checkForTriplets = (dna: string) => {
    return dna.length % 3 === 0 ? true : false;
  };

  let protein = [];

  if (checkForTriplets(dna) === false) {
    return 'DNA is not in triplets - please input sequence with complete triplets.';
  } else {
    // split into triplets
    const tripletArray: string[] = [];
    for (let i = 0; i < dna.length; i += 3) {
      tripletArray.push(dna.substring(i, i + 3));
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
  return protein.join(proteinJoin);
};
