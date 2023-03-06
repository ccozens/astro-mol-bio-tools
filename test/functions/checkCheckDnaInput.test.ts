// import modules to test
import { Molecule } from '../../src/functions/utilFunctions';
import { checkDnaInput } from '../../src/functions/checkDnaInput';
import { describe, test, expect } from 'vitest';

// tbj-tab for test block

describe('test DNA reformatting', () => {
  test('checkDnaInput should throw an error if any characters other than ACGT present', () => {
    //setup
    const dnaError1 = 'NNN';
    const dnaError2 = 'TAAAAAAA7AAATAAAAAAAAAA';
    const dnaError3 = 'xyz';
    //expected

    //test
    expect(checkDnaInput(dnaError1, Molecule.Dna)).toContain(
      'Non-DNA character entered, please enter ATCG only.'
    );
    expect(checkDnaInput(dnaError2, Molecule.Dna)).toContain(
      'Non-DNA character entered, please enter ATCG only.'
    );
    expect(checkDnaInput(dnaError3, Molecule.Dna)).toContain(
      'Non-DNA character entered, please enter ATCG only.'
    );
  });

  test('checkDnaInput should return exact input if no error', () => {
    //setup
    const dna1 = 'AATTGGCC';
    const dna2 = 'CACGTACGT';
    const dna3 =
      'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
    const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';

    //test
    expect(checkDnaInput(dna1, Molecule.Dna)).toBe(dna1);
    expect(checkDnaInput(dna2, Molecule.Dna)).toBe(dna2);
    expect(checkDnaInput(dna3, Molecule.Dna)).toBe(dna3);
    expect(checkDnaInput(dna4, Molecule.Dna)).toBe(dna4);
  });
});
