import { describe, test, expect } from 'vitest';
// import modules to test
import { checkProteinThreeLetterInput } from '../../src/functions/checkProteinThreeLetterInput';

// tbj-tab for test block

describe('validate  that protein is in three letter input format', () => {

  test('checkProteinThreeLetterInput should return exact input if no error', () => {
    //setup
    const protein1 = 'LeuGluGluArgGlnLysValLysLysLysMet';
    const protein2 =
      'LysTyrGluValProProGluLysLeuValIleTyrGluGlnIleThrArgAspLeuLysAspTyrLysAlaThrGlyProHisValAlaValAlaLysArgLeuAlaAlaArgGlyIleLysIleArgProGlyThrValIleSerTyrIleValLeuLysGlySerGlyArgIleGlyAsp';
    const protein3 =
      'ArgProIleGluValTrpLysLeuTyrPheThrHisProGlnAspValProAlaIleArgAspLysIleLysGluHisProAlaValValAspIleTyrGluTyrAspIleProPheAlaLysArgTyrLeuIleAspLysGlyLeuIleProMetGluGlyAspGluGluLeuLysMetLeuAlaPheAspIleGluThrLeuTyrHisGluGlyGluGluPheAlaGluGlyProIleLeuMetIleSerTyrAlaAspGluGluGlyAlaArgValIleThrTrpLysAsnIleAspLeuProTyrValAspValValSerThrGluLysGluMetIleLysArgPheLeuLysValValLysGluLysAspProAspValLeuIleThrTyrAsnGlyAspAsnPheAspPheAlaTyrLeuLysLysArgSerGluLysLeuGlyValLysPheIleLeuGlyArgGluGlySerGluProLysIleGlnArgMetGlyAspArgPheAlaValGluValLysGlyArgIleHisPheAspLeuTyrProValIleArgArgThrIleAsnLeuProThrTyrThrLeuGluAlaValTyrGluAlaIlePheGlyGlnProLysGluLysValTyrAlaGluGluIleAlaGlnAlaTrpGluThrGlyGluGlyLeuGluArgValAlaArgTyrSerMetGluAspAlaLysValThrTyrGluLeuGlyLysGluPhePheProMetGluAlaGlnLeuSerArgLeuValGlyGlnSerLeuTrpAspValSerArgSerSerThrGlyAsnLeuValGluTrpPheLeuLeuArgLysAlaTyrGluArgAsnGluLeuAlaProAsnLysProAspGluArgGluLeuAlaArgArgArgGluSerTyrAlaGlyGlyTyrValLysGluProGluArgGlyLeuTrpGluAsnIle';
    const protein4 = 'LysLysLysLysLysLysLysLysLysLysLysLys';

    //test
    expect(checkProteinThreeLetterInput(protein1)).toBe(protein1);
    expect(checkProteinThreeLetterInput(protein2)).toBe(protein2);
    expect(checkProteinThreeLetterInput(protein3)).toBe(protein3);
    expect(checkProteinThreeLetterInput(protein4)).toBe(protein4);
  });
});
