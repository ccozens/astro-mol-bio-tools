import {
  Molecule,
  findMatches,
} from '../../src/functions/utilFunctions';
import { describe, test, expect } from 'vitest';

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
