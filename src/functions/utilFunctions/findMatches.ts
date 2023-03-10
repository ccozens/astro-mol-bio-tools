import { Molecule } from '../../types';

export const findMatches = (input: string, molecule: Molecule) => {
  let searchRegex: RegExp =
    molecule === Molecule.Dna
      ? new RegExp(/[^ACGT]/gi)
      : new RegExp(/[^ARNDCEQGHILKMFPSTWYV]/gi);

  const matches = input.matchAll(searchRegex);
  const indexes = [];
  for (const match of matches) {
    if (match.index) indexes.push(match.index + 1);
  }
  return indexes.join(', ');
};
