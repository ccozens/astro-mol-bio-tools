// import modules to test
import { computeExtinctionCoefficients } from '../../src/functions/computeExtinctionCoefficients';
import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('computeExtinctionCoefficients returns correct extinction coeffecients', () => {

      //expected
      const coeffecients1 = {
        absCysPaired: 0.0882875301692162,
        absCysReduced: 0,
      };
      const coeffecients2 = {
        absCysPaired: 0.9020389825439725,
        absCysReduced: 0.8835090116618037,
      };
      const coeffecients3 = {
        absCysPaired: 1.5894446234084612,
        absCysReduced: 1.5861302422603076,
      };


  test('returns correct extinction coeffecients from single letter formatting input', () => {
    //setup
    const protein1 = 'LEERQKVKKKM';
    const protein2 =
      'KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 =
      'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';



    //test
    expect(
      computeExtinctionCoefficients(protein1, 'oneLetter')
    ).toEqual(coeffecients1);
    expect(
      computeExtinctionCoefficients(protein2, 'oneLetter')
    ).toEqual(coeffecients2);
    expect(
      computeExtinctionCoefficients(protein3, 'oneLetter')
    ).toEqual(coeffecients3);
  });

  test('returns correct extinction coeffecients from three letter formatting input', () => {
    //setup
    const protein1 = 'LeuGluGluArgGlnLysValLysLysLysMet';
    const protein2 =
      'LysTyrGluValProProGluLysLeuValIleTyrGluGlnIleThrArgAspLeuLysAspTyrLysAlaThrGlyProHisValAlaValAlaLysArgLeuAlaAlaArgGlyIleLysIleArgProGlyThrValIleSerTyrIleValLeuLysGlySerGlyArgIleGlyAsp';
    const protein3 =
      'ArgProIleGluValTrpLysLeuTyrPheThrHisProGlnAspValProAlaIleArgAspLysIleLysGluHisProAlaValValAspIleTyrGluTyrAspIleProPheAlaLysArgTyrLeuIleAspLysGlyLeuIleProMetGluGlyAspGluGluLeuLysMetLeuAlaPheAspIleGluThrLeuTyrHisGluGlyGluGluPheAlaGluGlyProIleLeuMetIleSerTyrAlaAspGluGluGlyAlaArgValIleThrTrpLysAsnIleAspLeuProTyrValAspValValSerThrGluLysGluMetIleLysArgPheLeuLysValValLysGluLysAspProAspValLeuIleThrTyrAsnGlyAspAsnPheAspPheAlaTyrLeuLysLysArgSerGluLysLeuGlyValLysPheIleLeuGlyArgGluGlySerGluProLysIleGlnArgMetGlyAspArgPheAlaValGluValLysGlyArgIleHisPheAspLeuTyrProValIleArgArgThrIleAsnLeuProThrTyrThrLeuGluAlaValTyrGluAlaIlePheGlyGlnProLysGluLysValTyrAlaGluGluIleAlaGlnAlaTrpGluThrGlyGluGlyLeuGluArgValAlaArgTyrSerMetGluAspAlaLysValThrTyrGluLeuGlyLysGluPhePheProMetGluAlaGlnLeuSerArgLeuValGlyGlnSerLeuTrpAspValSerArgSerSerThrGlyAsnLeuValGluTrpPheLeuLeuArgLysAlaTyrGluArgAsnGluLeuAlaProAsnLysProAspGluArgGluLeuAlaArgArgArgGluSerTyrAlaGlyGlyTyrValLysGluProGluArgGlyLeuTrpGluAsnIle';



    //test
    expect(
      computeExtinctionCoefficients(protein1, 'threeLetter')
    ).toEqual(coeffecients1);
    expect(
      computeExtinctionCoefficients(protein2, 'threeLetter')
    ).toEqual(coeffecients2);
    expect(
      computeExtinctionCoefficients(protein3, 'threeLetter')
    ).toEqual(coeffecients3);
  });
});


