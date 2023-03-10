import {
  findMatches,
  sanitiseInput,
  countNucleotides,
  countAminoAcids,
} from '../../src/functions/utilFunctions/findMatches';
import { Molecule } from '../../src/types';
import { tgo } from '../../src/functions/lookupTables';
import { describe, test, expect } from 'vitest';

const totalAAcount = (count: Record<string, number>) =>
  Object.values(count).reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);

describe('test findMatches function', () => {
  test('returns nothing if all nts are valid DNA, case insensitive', () => {
    //setup
    const dna1 = 'AATTGGCC';
    const dna2 = 'CACGTACGT';
    const dna3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
    const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';
    const dna5 =
      'agcaatctatcagggaacggcggtggccggtgcggcgtgttcggtggcggctctggccgctcaggcgcctgcggctgggtgagcgcacgcgaggcggcgaggcggcagcgtgtttctaggtcgtggcgtcgggcttccggagctttggcggcagctaggggaggat';

    const expectedMatches = '';

    //test
    expect(findMatches(dna1, Molecule.Dna)).toBe(expectedMatches);
    expect(findMatches(dna2, Molecule.Dna)).toBe(expectedMatches);
    expect(findMatches(dna3, Molecule.Dna)).toBe(expectedMatches);
    expect(findMatches(dna4, Molecule.Dna)).toBe(expectedMatches);
    expect(findMatches(dna5, Molecule.Dna)).toBe(expectedMatches);
  });

  test('correctly locates errors in DNA', () => {
    const dna1 = 'AATTFGGCC';
    const dna2 = 'CACGTA45T';
    const dna3 =
      'AGCAATCTATCAGGGAAqCGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCrGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGqCTTCCGGAGCTTTGGCgGGCAGCTAGGGGAGGAT';
    const dna4 = 'TAAAArrAAAATAAAAAAAAAA';

    const match1 = '5';
    const match2 = '7, 8';
    const match3 = '18, 68, 136';
    const match4 = '6, 7';

    //test
    expect(findMatches(dna1, Molecule.Dna)).toBe(match1);
    expect(findMatches(dna2, Molecule.Dna)).toBe(match2);
    expect(findMatches(dna3, Molecule.Dna)).toBe(match3);
    expect(findMatches(dna4, Molecule.Dna)).toBe(match4);
  });

  test('returns nothing if all residues are valid protein, case insensitive', () => {
    //setup
    const protein1 = 'LEERQKVKKKM';
    const protein2 =
      'KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 =
      'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';
    const protein4 = 'KKKKKKKKKKKKKKKKK';

    const expectedMatches = '';

    //test
    expect(findMatches(protein1, Molecule.Protein)).toBe(
      expectedMatches
    );
    expect(findMatches(protein2, Molecule.Protein)).toBe(
      expectedMatches
    );
    expect(findMatches(protein3, Molecule.Protein)).toBe(
      expectedMatches
    );
    expect(findMatches(protein4, Molecule.Protein)).toBe(
      expectedMatches
    );
  });

  test('correctly locates errors in proteins', () => {
    const protein1 = 'LEERQ.KKxKM';
    const protein2 =
      'KYEVPPEKLVIYOQITRDLKDYKATGPHVAVAKRLzARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 =
      'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKE;IKRFLKVVKEKDPDVLITYNGDNFD7AYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMED8ˆKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';
    const protein4 = 'KKKKKKKKKKKKKKKKKz';

    const match1 = '6, 9';
    const match2 = '13, 36';
    const match3 = '113, 139, 239, 240';
    const match4 = '18';

    //test
    expect(findMatches(protein1, Molecule.Protein)).toBe(match1);
    expect(findMatches(protein2, Molecule.Protein)).toBe(match2);
    expect(findMatches(protein3, Molecule.Protein)).toBe(match3);
    expect(findMatches(protein4, Molecule.Protein)).toBe(match4);
  });
});

describe('test sanitiseInput function', () => {
  test('sanitiseInput should strip line breaks, carriage returns, spacers and final * from protein', () => {
    const protein1 = 'A-A-t.t.G.g c C';
    const protein2 = 'ca\rcg\rtacgt*';
    const protein3 = 'ca\rcg\rtacgt';
    const protein4 =
      'AGCAATCTATCAGGGAA..CGGCGG\nTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGT--GA\n\nGCGC\nACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAG\nCTTTGGCGGCAGCTAGGGGAGG\nAT';

    const exp_protein1 = 'AATTGGCC';
    const exp_protein2 = 'CACGTACGT';
    const exp_protein3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';

    //test
    expect(sanitiseInput(protein1)).toBe(exp_protein1);
    expect(sanitiseInput(protein2)).toBe(exp_protein2);
    expect(sanitiseInput(protein3)).toBe(exp_protein2); // not a mistake - protein2 and protein3 are the same apart from final *
    expect(sanitiseInput(protein4)).toBe(exp_protein3);
  });

  test('sanitiseInput should strip line breaks, carriage returns, spacers from DNA', () => {
    // setup
    const dna1 = 'A-A-t.t.G g c-C';
    const dna2 = 'cacgtacgt';
    const dna3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTC\r\rAGGC\nGC--CTG.C.G,GCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
    //  expect
    const exp_dna1 = 'AATTGGCC';
    const exp_dna2 = 'CACGTACGT';
    const exp_dna3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';

    // test
    expect(sanitiseInput(dna1)).toBe(exp_dna1);
    expect(sanitiseInput(dna2)).toBe(exp_dna2);
    expect(sanitiseInput(dna3)).toBe(exp_dna3);
  });

  describe('test countNucleotides function', () => {
    // setup
    const dna1 = 'AATTGGCC';
    const dna2 = 'CACGTACGT';
    const dna3 = tgo.dna;
    const dna4 =
      'AAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAA';

    //expect
    const ntCount1 = { A: 2, C: 2, G: 2, T: 2 };
    const ntCount2 = { A: 2, C: 3, G: 2, T: 2 };
    const ntCount3 = { A: 659, C: 562, G: 673, T: 428 };
    const ntCount4 = { A: 64, C: 1, G: 1, T: 1 };

    test('countNucleotides should return correct nucleotide counts', () => {
      //test
      expect(countNucleotides(dna1)).toEqual(ntCount1);
      expect(countNucleotides(dna2)).toEqual(ntCount2);
      expect(countNucleotides(dna3)).toEqual(ntCount3);
      expect(countNucleotides(dna4)).toEqual(ntCount4);
    });

    test('total amino acids counted by countAminoAcids should equal original protein length', () => {
      const total1 = totalAAcount(ntCount1);
      const total2 = totalAAcount(ntCount2);
      const total3 = totalAAcount(ntCount3);
      const total4 = totalAAcount(ntCount4);

      // test total amount matches original protein length
      expect(total1 === dna1.length).toBeTruthy;
      expect(total2 === dna2.length).toBeTruthy;
      expect(total3 === dna3.length).toBeTruthy;
      expect(total4 === dna4.length).toBeTruthy;
    });
  });

  describe('test countAminoAcids function', () => {
    // setup
    const protein1 = 'LEERQKVKKKM';
    const protein2 =
      'KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 = tgo.protein;
    const protein4 = 'KKKKKKKKKKKKKKKKK';

    //expect
    const aminoAcidCount1 = {
      A: 0,
      R: 1,
      N: 0,
      D: 0,
      C: 0,
      E: 2,
      Q: 1,
      G: 0,
      H: 0,
      I: 0,
      L: 1,
      K: 4,
      M: 1,
      F: 0,
      P: 0,
      S: 0,
      T: 0,
      W: 0,
      Y: 0,
      V: 1,
    };
    const aminoAcidCount2 = {
      A: 5,
      R: 5,
      N: 0,
      D: 3,
      C: 0,
      E: 3,
      Q: 1,
      G: 6,
      H: 1,
      I: 7,
      L: 4,
      K: 7,
      M: 0,
      F: 0,
      P: 4,
      S: 2,
      T: 3,
      W: 0,
      Y: 4,
      V: 6,
    };
    const aminoAcidCount3 = {
      A: 55,
      R: 53,
      N: 15,
      D: 49,
      C: 4,
      E: 83,
      Q: 15,
      G: 48,
      H: 10,
      I: 59,
      L: 60,
      K: 77,
      M: 9,
      F: 34,
      P: 35,
      S: 22,
      T: 35,
      W: 10,
      Y: 46,
      V: 54,
    };
    const aminoAcidCount4 = {
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
      K: 17,
      M: 0,
      F: 0,
      P: 0,
      S: 0,
      T: 0,
      W: 0,
      Y: 0,
      V: 0,
    };
    test('countAminoAcids should return correct amino acid counts', () => {
      // test each AA count
      expect(countAminoAcids(protein1)).toEqual(aminoAcidCount1);
      expect(countAminoAcids(protein2)).toEqual(aminoAcidCount2);
      expect(countAminoAcids(protein3)).toEqual(aminoAcidCount3);
      expect(countAminoAcids(protein4)).toEqual(aminoAcidCount4);
    });
  });
});
