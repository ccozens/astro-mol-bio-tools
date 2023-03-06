// import modules to test
import { convertOneToThreeLetter } from '../../src/functions/convertOneToThreeLetter';
import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('check convertOneToThreeLetter correctly converts sequences from three letter code to one letter code', () => {
  test('check three letter code correctly converted', () => {
    //setup
    const oneLetter =
      'ARGIKIRPGTVISYIVLKGSGRIGDRAIPFDEFDPAKHKYDAEYYIENQVLPAVERILRAFGYRKEDLRYQKTRQVGLGAWLKPKT';
    //expected
    const threeLetter =
      'AlaArgGlyIleLysIleArgProGlyThrValIleSerTyrIleValLeuLysGlySerGlyArgIleGlyAspArgAlaIleProPheAspGluPheAspProAlaLysHisLysTyrAspAlaGluTyrTyrIleGluAsnGlnValLeuProAlaValGluArgIleLeuArgAlaPheGlyTyrArgLysGluAspLeuArgTyrGlnLysThrArgGlnValGlyLeuGlyAlaTrpLeuLysProLysThr';
    //test
    expect(convertOneToThreeLetter(oneLetter)).toBe(threeLetter);
  });
});
