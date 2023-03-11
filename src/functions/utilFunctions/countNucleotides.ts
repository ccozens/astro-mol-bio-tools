import type { NtCounts } from '../../types';

export const countNucleotides = (dna: string) => {
  // create empty object
  const ntCounts: NtCounts = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
    Total: 0,
    GC: 0,
  };
  // count
  for (let nt of dna) {
    if (nt === 'A') ntCounts.A++;
    if (nt === 'C') ntCounts.C++;
    if (nt === 'G') ntCounts.G++;
    if (nt === 'T') ntCounts.T++;
  }
  ntCounts.Total = ntCounts.A + ntCounts.C + ntCounts.G + ntCounts.T;
  // if clause needed as otherwise CG = NaN on load
  if (ntCounts.Total > 0) {
    ntCounts.GC = (ntCounts.C + ntCounts.G) / ntCounts.Total;
  } else {
    ntCounts.GC = 0;
  }
  return ntCounts;
};
