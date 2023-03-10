import type { AminoAcidCounts } from "../../types";

export const countAminoAcids = (protein: string) => {
    // create empty object
    const aminoAcidCounts: AminoAcidCounts = {
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
  