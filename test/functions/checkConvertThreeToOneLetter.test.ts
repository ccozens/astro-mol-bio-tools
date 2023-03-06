// import modules to test
import { convertThreeToOneLetter } from '../../src/functions/convertThreeToOneLetter';
import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('check convertThreeToOneLetter correctly converts sequences from three letter code to one letter code', () => {
  test('check three letter code correctly converted', () => {
    //setup
    const threeLetter = 'AlaArgGlyIleLysIleArgProGlyThrValIleSerTyrIleValLeuLysGlySerGlyArgIleGlyAspArgAlaIleProPheAspGluPheAspProAlaLysHisLysTyrAspAlaGluTyrTyrIleGluAsnGlnValLeuProAlaValGluArgIleLeuArgAlaPheGlyTyrArgLysGluAspLeuArgTyrGlnLysThrArgGlnValGlyLeuGlyAlaTrpLeuLysProLysThr';
    //expected
    const oneLetter = 'ARGIKIRPGTVISYIVLKGSGRIGDRAIPFDEFDPAKHKYDAEYYIENQVLPAVERILRAFGYRKEDLRYQKTRQVGLGAWLKPKT';
    //test
    expect(convertThreeToOneLetter(threeLetter)).toBe(oneLetter);
  });
});