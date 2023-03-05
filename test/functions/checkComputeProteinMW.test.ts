// import modules to test
import { computeProteinMW } from '../../src/functions/computeProteinMW';
import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('computeProteinMW returns correct MW', () => {
  test('returns correct MW', () => {
    //setup
    const protein1 = Array.from('LEERQKVKKKM');
    const protein2 =
      Array.from('KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD');
    const protein3 =
      Array.from('RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI');
    
    //expected
    const mw1 = 1415.828;
    const mw2 = 6745.828;
    const mw3 = 37714.431;

    //test
    expect(computeProteinMW(protein1)).toBeCloseTo(mw1);
    expect(computeProteinMW(protein2)).toBeCloseTo(mw2, 2);
    expect(computeProteinMW(protein3)).toBeCloseTo(mw3, 1);
  })
});