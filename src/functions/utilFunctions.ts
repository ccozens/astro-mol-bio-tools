export enum Molecule {
  Protein,
  Dna,
}

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

export const sanitiseInput = (input: string) => {
  // ensure uppercase
  const inputUpper = input.toUpperCase();
  //remove star at end (if present), any spacers (dash, space, period or comma), line breaks and carriage returns
  const sanitisedInput =
    inputUpper.at(-1) === '*'
      ? inputUpper.replace(/[- .,\r\n]/g, '').slice(0, -1)
      : inputUpper.replace(/[- .,\r\n]/g, '');

  return sanitisedInput;
};
