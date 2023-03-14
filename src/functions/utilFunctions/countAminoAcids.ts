import type { AminoAcidCounts } from "../../types";

export const countAminoAcids = (protein: string) => {
    // create empty object
    const aminoAcidCounts: AminoAcidCounts = {
      A: {count: 0, ratio: 0},
      R: {count: 0, ratio: 0},
      N: {count: 0, ratio: 0},
      D: {count: 0, ratio: 0},
      C: {count: 0, ratio: 0},
      E: {count: 0, ratio: 0},
      Q: {count: 0, ratio: 0},
      G: {count: 0, ratio: 0},
      H: {count: 0, ratio: 0},
      I: {count: 0, ratio: 0},
      L: {count: 0, ratio: 0},
      K: {count: 0, ratio: 0},
      M: {count: 0, ratio: 0},
      F: {count: 0, ratio: 0},
      P: {count: 0, ratio: 0},
      S: {count: 0, ratio: 0},
      T: {count: 0, ratio: 0},
      W: {count: 0, ratio: 0},
      Y: {count: 0, ratio: 0},
      V: {count: 0, ratio: 0},
      Total: 0,
    }
    
    // counta
    for (let aa of protein) {
      if (aa === 'A') aminoAcidCounts.A.count++
      if (aa === 'R') aminoAcidCounts.R.count++;
      if (aa === 'N') aminoAcidCounts.N.count++;
      if (aa === 'D') aminoAcidCounts.D.count++;
      if (aa === 'C') aminoAcidCounts.C.count++;
      if (aa === 'E') aminoAcidCounts.E.count++;
      if (aa === 'Q') aminoAcidCounts.Q.count++;
      if (aa === 'G') aminoAcidCounts.G.count++;
      if (aa === 'H') aminoAcidCounts.H.count++;
      if (aa === 'I') aminoAcidCounts.I.count++;
      if (aa === 'L') aminoAcidCounts.L.count++;
      if (aa === 'K') aminoAcidCounts.K.count++;
      if (aa === 'M') aminoAcidCounts.M.count++;
      if (aa === 'F') aminoAcidCounts.F.count++;
      if (aa === 'P') aminoAcidCounts.P.count++;
      if (aa === 'S') aminoAcidCounts.S.count++;
      if (aa === 'T') aminoAcidCounts.T.count++;
      if (aa === 'W') aminoAcidCounts.W.count++;
      if (aa === 'Y') aminoAcidCounts.Y.count++;
      if (aa === 'V') aminoAcidCounts.V.count++;
    }
    
    // set total
    aminoAcidCounts.Total = protein.length;
    
    // calc ratios
    aminoAcidCounts.A.ratio = aminoAcidCounts.A.count / aminoAcidCounts.Total;
    aminoAcidCounts.R.ratio = aminoAcidCounts.R.count / aminoAcidCounts.Total;
    aminoAcidCounts.N.ratio = aminoAcidCounts.N.count / aminoAcidCounts.Total;
    aminoAcidCounts.D.ratio = aminoAcidCounts.D.count / aminoAcidCounts.Total;
    aminoAcidCounts.C.ratio = aminoAcidCounts.C.count / aminoAcidCounts.Total;
    aminoAcidCounts.E.ratio = aminoAcidCounts.E.count / aminoAcidCounts.Total;
    aminoAcidCounts.Q.ratio = aminoAcidCounts.Q.count / aminoAcidCounts.Total;
    aminoAcidCounts.G.ratio = aminoAcidCounts.G.count / aminoAcidCounts.Total;
    aminoAcidCounts.H.ratio = aminoAcidCounts.H.count / aminoAcidCounts.Total;
    aminoAcidCounts.I.ratio = aminoAcidCounts.I.count / aminoAcidCounts.Total;
    aminoAcidCounts.L.ratio = aminoAcidCounts.L.count / aminoAcidCounts.Total;
    aminoAcidCounts.K.ratio = aminoAcidCounts.K.count / aminoAcidCounts.Total;
    aminoAcidCounts.M.ratio = aminoAcidCounts.M.count / aminoAcidCounts.Total;
    aminoAcidCounts.F.ratio = aminoAcidCounts.F.count / aminoAcidCounts.Total;
    aminoAcidCounts.P.ratio = aminoAcidCounts.P.count / aminoAcidCounts.Total;
    aminoAcidCounts.S.ratio = aminoAcidCounts.S.count / aminoAcidCounts.Total;
    aminoAcidCounts.T.ratio = aminoAcidCounts.T.count / aminoAcidCounts.Total;
    aminoAcidCounts.W.ratio = aminoAcidCounts.W.count / aminoAcidCounts.Total;
    aminoAcidCounts.Y.ratio = aminoAcidCounts.Y.count / aminoAcidCounts.Total;
    aminoAcidCounts.V.ratio = aminoAcidCounts.V.count / aminoAcidCounts.Total;
    


    return aminoAcidCounts;
  };  