// import modules to test
import {
  approxDsDnaMw,
  approxRnaMw,
  approxSsDnaMw,
  exactDsDnaMw,
  exactSsDnaMw,
  exactRnaMw,
  gcRatio,
} from '../../src/functions/dnaAnalysis';
import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('test DNA/RNA mol weight calculations', () => {
  const dna1 = 'AATTGGCC';
  const dna2 = 'CACGTACGT';
  const dna3 =
    'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
  const dna4 = 'TAAAAAAAAAATAAAAAAAAAA';

  test('approxMW calcs should return the correct MW', () => {
    //expected
    // ssDna
    const approxSs1 = 2508.6;
    const approxSs2 = 2812.29999;
    const approxSs3 = 50493.2;
    const approxSs4 = 6760.4;

    // dsDna
    const approxDs1 = 5017.09999;
    const approxDs2 = 5624.5;
    const approxDs3 = 100986.2999999;
    const approxDs4 = 13520.699;

    // RNA
    const approxRna1 = 2723;
    const approxRna2 = 3043.5;
    const approxRna3 = 53362;
    const approxRna4 = 7210;

    //test
    // ssDna
    expect(approxSsDnaMw(dna1)).toBeCloseTo(approxSs1, 2);
    expect(approxSsDnaMw(dna2)).toBeCloseTo(approxSs2, 2);
    expect(approxSsDnaMw(dna3)).toBeCloseTo(approxSs3, 2);
    expect(approxSsDnaMw(dna4)).toBeCloseTo(approxSs4, 2);
    // dsDna
    expect(approxDsDnaMw(dna1)).toBeCloseTo(approxDs1, 2);
    expect(approxDsDnaMw(dna2)).toBeCloseTo(approxDs2, 2);
    expect(approxDsDnaMw(dna3)).toBeCloseTo(approxDs3, 2);
    expect(approxDsDnaMw(dna4)).toBeCloseTo(approxDs4, 2);
    // RNA
    expect(approxRnaMw(dna1)).toBeCloseTo(approxRna1, 2);
    expect(approxRnaMw(dna2)).toBeCloseTo(approxRna2, 2);
    expect(approxRnaMw(dna3)).toBeCloseTo(approxRna3, 2);
    expect(approxRnaMw(dna4)).toBeCloseTo(approxRna4, 2);
  });

  test('exactMW calcs should return the correct MW', () => {
    //expected
    // ssDna
    const exactSs1 = 2550.6;
    const exactSs2 = 2839.7999999999997;
    const exactSs3 = 51992.19999999987;
    const exactSs4 = 6951.399999999998;

    // dsDna
    const exactDs1 = 5101.2;
    const exactDs2 = 5679.6;
    const exactDs3 = 103984.4;
    const exactDs4 = 13902.8;

    // RNA
    const exactRna1 = 2650.6;
    const exactRna2 = 2955.7999999999997;
    const exactRna3 = 54228.19999999986;
    const exactRna4 = 7275.399999999998;

    //test
    // ssDna
    expect(exactSsDnaMw(dna1)).toBeCloseTo(exactSs1), 2;
    expect(exactSsDnaMw(dna2)).toBeCloseTo(exactSs2), 2;
    expect(exactSsDnaMw(dna3)).toBeCloseTo(exactSs3), 2;
    expect(exactSsDnaMw(dna4)).toBeCloseTo(exactSs4), 2;
    // dsDna
    expect(exactDsDnaMw(dna1)).toBeCloseTo(exactDs1), 2;
    expect(exactDsDnaMw(dna2)).toBeCloseTo(exactDs2), 2;
    expect(exactDsDnaMw(dna3)).toBeCloseTo(exactDs3), 2;
    expect(exactDsDnaMw(dna4)).toBeCloseTo(exactDs4), 2;
    // RNA
    expect(exactRnaMw(dna1)).toBeCloseTo(exactRna1, 2);
    expect(exactRnaMw(dna2)).toBeCloseTo(exactRna2, 2);
    expect(exactRnaMw(dna3)).toBeCloseTo(exactRna3, 2);
    expect(exactRnaMw(dna4)).toBeCloseTo(exactRna4, 2);
  });

  test('gcRatio should return the correct GC:AT ratop', () => {
    //expected
    const ratio1 = 0.5;
    const ratio2 = 0.556;
    const ratio3 = 0.705;
    const ratio4 = 0.0;

    //test
    expect(gcRatio(dna1)).toBeCloseTo(ratio1, 2);
    expect(gcRatio(dna2)).toBeCloseTo(ratio2, 2);
    expect(gcRatio(dna3)).toBeCloseTo(ratio3, 2);
    expect(gcRatio(dna4)).toBeCloseTo(ratio4, 2);
  });
});
