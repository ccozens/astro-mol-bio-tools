import { Molecule } from '../../types';

export const findMatches = (input: string, molecule: Molecule) => {
  let searchRegex: RegExp ;
  switch (molecule) {
    case Molecule.Dna:
      searchRegex = new RegExp(/[^ACGT]/gi);
    case Molecule.Rna:
      searchRegex = new RegExp(/[^ACGU]/gi);
    case Molecule.Protein:
      searchRegex = new RegExp(/[^ARNDCEQGHILKMFPSTWYV]/gi);
  }

  const matches = input.matchAll(searchRegex);
  const indexes = [];
  for (const match of matches) {
    if (match.index) indexes.push(match.index + 1);
  }
  return indexes.join(', ');
};
