import { describe, test, expect } from 'vitest';
// import modules to test
import { translateDna } from '../../src/functions/translateFunction';

describe('translate should return correct amino acid string', () => {
  test('test translation', () => {
    // setup

    const dna1 = 'TTAACCGGG';
    const dna2 =
      'TCGTTAGATAGTCCCTTGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGTCCGCGGACGCCGACCCACTCGCGTGCGCTCCGCCGCTCCGCCGTCGCACAAAGATCCAGCACCGCAGCCCGAAGGCCTCGAAACCGCCGTCGATCCCCTCCTAAA';

    // expected
    const protein1_one_none = 'LTG';
    const protein1_one_dot = 'L.T.G';
    const protein1_one_dash = 'L-T-G';
    
    const protein2_one_none = 'SLDSPLPPPATPHKPPPRPASPRTPTHSRALRRSAVAQRSSTAARRPRNRRRSPPK';
    const protein2_one_dot = 'S.L.D.S.P.L.P.P.P.A.T.P.H.K.P.P.P.R.P.A.S.P.R.T.P.T.H.S.R.A.L.R.R.S.A.V.A.Q.R.S.S.T.A.A.R.R.P.R.N.R.R.R.S.P.P.K';
    const protein2_one_dash = 'S-L-D-S-P-L-P-P-P-A-T-P-H-K-P-P-P-R-P-A-S-P-R-T-P-T-H-S-R-A-L-R-R-S-A-V-A-Q-R-S-S-T-A-A-R-R-P-R-N-R-R-R-S-P-P-K';

    const protein1_three_none = 'LeuThrGly';
    const protein1_three_dot = 'Leu.Thr.Gly';
    const protein1_three_dash = 'Leu-Thr-Gly';
    
    const protein2_three_none = 'SerLeuAspSerProLeuProProProAlaThrProHisLysProProProArgProAlaSerProArgThrProThrHisSerArgAlaLeuArgArgSerAlaValAlaGlnArgSerSerThrAlaAlaArgArgProArgAsnArgArgArgSerProProLys';
    const protein2_three_dot = 'Ser.Leu.Asp.Ser.Pro.Leu.Pro.Pro.Pro.Ala.Thr.Pro.His.Lys.Pro.Pro.Pro.Arg.Pro.Ala.Ser.Pro.Arg.Thr.Pro.Thr.His.Ser.Arg.Ala.Leu.Arg.Arg.Ser.Ala.Val.Ala.Gln.Arg.Ser.Ser.Thr.Ala.Ala.Arg.Arg.Pro.Arg.Asn.Arg.Arg.Arg.Ser.Pro.Pro.Lys';
    const protein2_three_dash = 'Ser-Leu-Asp-Ser-Pro-Leu-Pro-Pro-Pro-Ala-Thr-Pro-His-Lys-Pro-Pro-Pro-Arg-Pro-Ala-Ser-Pro-Arg-Thr-Pro-Thr-His-Ser-Arg-Ala-Leu-Arg-Arg-Ser-Ala-Val-Ala-Gln-Arg-Ser-Ser-Thr-Ala-Ala-Arg-Arg-Pro-Arg-Asn-Arg-Arg-Arg-Ser-Pro-Pro-Lys';
    

    //test
    expect(translateDna(dna1, 'oneLetter', '')).toBe(protein1_one_none);
    expect(translateDna(dna1, 'oneLetter', '.')).toBe(protein1_one_dot);
    expect(translateDna(dna1, 'oneLetter', '-')).toBe(protein1_one_dash);

    expect(translateDna(dna1, 'threeLetter', '')).toBe(protein1_three_none);
    expect(translateDna(dna1, 'threeLetter', '.')).toBe(protein1_three_dot);
    expect(translateDna(dna1, 'threeLetter', '-')).toBe(protein1_three_dash);

    expect(translateDna(dna2, 'oneLetter', '')).toBe(protein2_one_none);
    expect(translateDna(dna2, 'oneLetter', '.')).toBe(protein2_one_dot);
    expect(translateDna(dna2, 'oneLetter', '-')).toBe(protein2_one_dash);

    expect(translateDna(dna2, 'threeLetter', '')).toBe(protein2_three_none);
    expect(translateDna(dna2, 'threeLetter', '.')).toBe(protein2_three_dot);
    expect(translateDna(dna2, 'threeLetter', '-')).toBe(protein2_three_dash);
  });
});
