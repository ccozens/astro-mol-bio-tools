import type { NtCounts } from '../../types';

export const countNucleotides = (dna: string) => {
  // create empty object
  const ntCounts: NtCounts = {
    A: {count: 0, ratio: 0},
    C: {count: 0, ratio: 0},
    G: {count: 0, ratio: 0},
    T: {count: 0, ratio: 0},
    Total: 0,
    GC: 0,
  };
  // count
  for (let nt of dna) {
    if (nt === 'A') ntCounts.A.count++;
    if (nt === 'C') ntCounts.C.count++;
    if (nt === 'G') ntCounts.G.count++;
    if (nt === 'T') ntCounts.T.count++;
  }
  ntCounts.Total = ntCounts.A.count + ntCounts.C.count + ntCounts.G.count + ntCounts.T.count;
  
  // if clause needed as otherwise CG = NaN and ratio = NaN on load
  if (ntCounts.Total > 0) {
    ntCounts.GC = (ntCounts.C.count + ntCounts.G.count) / ntCounts.Total;
    // calc ratios
    ntCounts.A.ratio = ntCounts.A.count / ntCounts.Total;
    ntCounts.C.ratio = ntCounts.C.count / ntCounts.Total;
    ntCounts.G.ratio = ntCounts.G.count / ntCounts.Total;
    ntCounts.T.ratio = ntCounts.T.count / ntCounts.Total;
   
  } else {
    ntCounts.GC = 0;
  }
 

  
  return ntCounts;
};
