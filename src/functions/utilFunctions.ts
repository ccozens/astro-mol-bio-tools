import { Molecule } from '../types';

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

export const countNucleotides = (dna: string) => {
  // create empty object
  const ntCounts = { A: 0, C: 0, G: 0, T: 0 };
  // count
  for (let nt of dna) {
    if (nt === 'A') ntCounts.A++;
    if (nt === 'C') ntCounts.C++;
    if (nt === 'G') ntCounts.G++;
    if (nt === 'T') ntCounts.T++;
  }
  return ntCounts;
};

export const countAminoAcids = (protein: string) => {
  // create empty object
  const aminoAcidCounts = {
    A: 0,
    R: 0,
    N: 0,
    D: 0,
    C: 0,
    E: 0,
    Q: 0,
    G: 0,
    H: 0,
    I: 0,
    L: 0,
    K: 0,
    M: 0,
    F: 0,
    P: 0,
    S: 0,
    T: 0,
    W: 0,
    Y: 0,
    V: 0
  }
  // count
  for (let aa of protein) {
    if (aa === 'A') aminoAcidCounts.A++;
    if (aa === 'R') aminoAcidCounts.R++;
    if (aa === 'N') aminoAcidCounts.N++;
    if (aa === 'D') aminoAcidCounts.D++;
    if (aa === 'C') aminoAcidCounts.C++;
    if (aa === 'E') aminoAcidCounts.E++;
    if (aa === 'Q') aminoAcidCounts.Q++;
    if (aa === 'G') aminoAcidCounts.G++;
    if (aa === 'H') aminoAcidCounts.H++;
    if (aa === 'I') aminoAcidCounts.I++;
    if (aa === 'L') aminoAcidCounts.L++;
    if (aa === 'K') aminoAcidCounts.K++;
    if (aa === 'M') aminoAcidCounts.M++;
    if (aa === 'F') aminoAcidCounts.F++;
    if (aa === 'P') aminoAcidCounts.P++;
    if (aa === 'S') aminoAcidCounts.S++;
    if (aa === 'T') aminoAcidCounts.T++;
    if (aa === 'W') aminoAcidCounts.W++;
    if (aa === 'Y') aminoAcidCounts.Y++;
    if (aa === 'V') aminoAcidCounts.V++;
  }
  return aminoAcidCounts;
};
