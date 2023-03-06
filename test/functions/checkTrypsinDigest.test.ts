// import modules to test
import { trypticDigest } from '../../src/functions/trypticDigest';

import { describe, test, expect } from 'vitest';

// tbv-tab for test block

describe('trypticDigest testing', () => {
  test('trypticDigest should return correct list of fragments', () => {
    //setup
    const protein1 = 'LEERQKVKKKM';
    const protein2 =
      'KYEVPPEKLVIYEQITRDLKDYKATGPHVAVAKRLAARGIKIRPGTVISYIVLKGSGRIGD';
    const protein3 =
      'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';
    const protein4 = 'KKKKKKKKKKKKKKKKK';

    // expected 
    const digest1 = {
        trypsinSummary: [ 'R4', 'K6', 'K8', 'K9', 'K10', ],
        trypsinSites: [ 0, 4, 6, 8, 9, 10 ],
        trypsinFragments: [ 'LEER', 'QK', 'VK', 'K', 'K', 'M' ]
    }

    const digest2 = {
        trypsinSummary: [
          'K1',  'K8',
          'R17', 'K20',
          'K23', 'K33',
          'R34', 'R38',
          'K41', 'K54',
          'R58'
        ],
        trypsinSites: [
           0,  1,  8, 17, 20,
          23, 33, 34, 38, 41,
          54, 58
        ],
        trypsinFragments: [
          'K',         'YEVPPEK',
          'LVIYEQITR', 'DLK',
          'DYK',       'ATGPHVAVAK',
          'R',         'LAAR',
          'GIK',       'IRPGTVISYIVLK',
          'GSGR',      'IGD'
        ]
      };
    const digest3 = {
        trypsinSummary: [
          'K7',   'R20',  'K22',        'K24',
          'K41',  'R42',  'K47',        'K59',
          'R92',  'K97',  'K111',       'K115',
          'R116', 'K119', 'K122',       'K124',
          'K143', 'K144', 'R145',       'K148',
          'K152', 'R157', 'K163',       'R166',
          'R170', 'K176', 'R178',       'R188',
          'R189', 'K210', 'K212',       'R230',
          'R233', 'K240', 'K247',       'R258',
          'R269', 'R282', 'K283',       'R287',
          'R298', 'R302', 'R303',       'R304',
          'K313', 'R317',
        ],
        trypsinSites: [
            0,   7,  20,  22,  24,  41,  42,  47,  59,
           92,  97, 111, 115, 116, 119, 122, 124, 143,
          144, 145, 148, 152, 157, 163, 166, 170, 176,
          178, 188, 189, 210, 212, 230, 233, 240, 247,
          258, 269, 282, 283, 287, 298, 302, 303, 304,
          313, 317
        ],
        trypsinFragments: [
          'RPIEVWK',
          'LYFTHPQDVPAIR',
          'DK',
          'IK',
          'EHPAVVDIYEYDIPFAK',
          'R',
          'YLIDK',
          'GLIPMEGDEELK',
          'MLAFDIETLYHEGEEFAEGPILMISYADEEGAR',
          'VITWK',
          'NIDLPYVDVVSTEK',
          'EMIK',
          'R',
          'FLK',
          'VVK',
          'EK',
          'DPDVLITYNGDNFDFAYLK',
          'K',
          'R',
          'SEK',
          'LGVK',
          'FILGR',
          'EGSEPK',
          'IQR',
          'MGDR',
          'FAVEVK',
          'GR',
          'IHFDLYPVIR',
          'R',
          'TINLPTYTLEAVYEAIFGQPK',
          'EK',
          'VYAEEIAQAWETGEGLER',
          'VAR',
          'YSMEDAK',
          'VTYELGK',
          'EFFPMEAQLSR',
          'LVGQSLWDVSR',
          'SSTGNLVEWFLLR',
          'K',
          'AYER',
          'NELAPNKPDER',
          'ELAR',
          'R',
          'R',
          'ESYAGGYVK',
          'EPER',
          'GLWENI'
        ]
      };
    const digest4 = {
        trypsinSummary: [
          'K1',  'K2',
          'K3',  'K4',
          'K5',  'K6',
          'K7',  'K8',
          'K9',  'K10',
          'K11', 'K12',
          'K13', 'K14',
          'K15', 'K16',
          'K17',
        ],
        trypsinSites: [
           0,  1,  2,  3,  4,  5,  6,
           7,  8,  9, 10, 11, 12, 13,
          14, 15, 16, 17
        ],
        trypsinFragments: [
          'K', 'K', 'K', 'K', 'K',
          'K', 'K', 'K', 'K', 'K',
          'K', 'K', 'K', 'K', 'K',
          'K', 'K', ''
        ]
      }
      ;
    //test
    expect(trypticDigest(protein1)).toEqual(digest1);
    expect(trypticDigest(protein2)).toEqual(digest2);
    expect(trypticDigest(protein3)).toEqual(digest3);
    expect(trypticDigest(protein4)).toEqual(digest4);
  });
});