import { describe, test, expect } from 'vitest';
// import modules to test
import { transcribe } from '../../src/functions/transcribeFunction';
// tbj-tab for test block

describe('transcribe should return correct amino acid string', () => {
  test('test transription', () => {
    // setup

    const dna1 = 'TTAACCGG';
    const dna2 = 'CACGTACGT';
    const dna3 =
      'TCGTTAGATAGTCCCTTGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGTCCGCGGACGCCGACCCACTCGCGTGCGCTCCGCCGCTCCGCCGTCGCACAAAGATCCAGCACCGCAGCCCGAAGGCCTCGAAACCGCCGTCGATCCCCTCCTA';

    // expected
    const rna1 = 'UUAACCGG';
    const rna2 = 'CACGUACGU';
    const rna3 =
        'UCGUUAGAUAGUCCCUUGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGUCCGCGGACGCCGACCCACUCGCGUGCGCUCCGCCGCUCCGCCGUCGCACAAAGAUCCAGCACCGCAGCCCGAAGGCCUCGAAACCGCCGUCGAUCCCCUCCUA';

    //test
    expect(transcribe(dna1)).toBe(rna1);
    expect(transcribe(dna2)).toBe(rna2);
    expect(transcribe(dna3)).toBe(rna3);
  });
});
