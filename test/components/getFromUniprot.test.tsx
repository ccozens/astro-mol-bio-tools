// MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK

import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from 'node-fetch';
// import modules to test
import GetFromUniprot from "../../src/components/react/protein/GetFromUniprot"
import { proteinInfo } from '../../src/mocks/handlers';
import { server } from '../../src/setupTests';

interface Data {
  message: string;
  sequence: string;
  length: number;
}

describe('My API tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  

  test('should return mocked data from external API', async () => {
    const response = await fetch(`https://www.ebi.ac.uk/proteins/api/proteins/P33333`);
    const data: Data = await response.json() as Data; // type assertion

    // expected
    const message = 'Fetched accession P33333 : 1-acyl-sn-glycerol-3-phosphate acyltransferase from Saccharomyces cerevisiae (strain ATCC 204508 / S288c)';
    const sequence = 'MSVIGRFLYYLRSVLVVLALAGCGFYGVIASILCTLIGKQHLAQWITARCFYHVMKLMLGLDVKVVGEENLAKKPYIMIANHQSTLDIFMLGRIFPPGCTVTAKKSLKYVPFLGWFMALSGTYFLDRSKRQEAIDTLNKGLENVKKNKRALWVFPEGTRSYTSELTMLPFKKGAFHLAQQGKIPIVPVVVSNTSTLVSPKYGVFNRGCMIVRILKPISTENLTKDKIGEFAEKVRDQMVDTLKEIGYSPAINDTTLPPQAIEYAALQHDKKVNKKIKNEPVPSVSISNDVNTHNEGSSVKKMH';
    const length = 303;

    // test
    expect(data.message).toEqual(message);
    expect(data.sequence).toEqual(sequence);
    expect(data.length).toEqual(length);
  });
});

/* 
describe('test API functionality', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    // render page
    render(<GetFromUniprot ariaLabelContent={'Format protein'} />);
    // set inputBox
    inputBox = screen.getByRole('textbox', {
      name: /get a sequence by uniprot accession:/i
    });
  });

    test('entering string returns test', async( { expect }) => {
      const accession = 'P33333';

      await user.type(inputBox, accession);
      expect(inputBox).toHaveValue(accession);



      expect(await screen.findByText(proteinInfo.sequence));
      expect(await screen.findByText(proteinInfo.length));
      expect(await screen.findByText('P33333'));
    
      
    })
  }); */
/* 
  test('test that entering accession makes call to API and returns the result', async () => {
    screen.logTestingPlaygroundURL();
    // define input
    const accession = 'P33333';

    await user.type(inputBox, accession);
    expect(inputBox).toHaveValue(accession);

    // expected output

    const expected = 'Fetched accession P33333 : 1-acyl-sn-glycerol-3-phosphate acyltransferase from Saccharomyces cerevisiae (strain ATCC 204508 / S288c)'; 
    // test
    expect(screen.getByText(expected));
  }); */

  /* test('test one to three letter transformation', async () => {
    // define input
    const oneLetter =
      'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';

    await user.type(inputBox, oneLetter);
    expect(inputBox).toHaveValue(oneLetter);
    // render output
    render(<GetFromUniprot ariaLabelContent={'Format protein'} />);

    // expected output
    const threeLetter =
      'MetProLysCysProLysCysAsnLysGluValTyrPheAlaGluArgValThrSerLeuGlyLysAspTrpHisArgProCysLeuLysCysGluLysCysGlyLysThrLeuThrSerGlyGlyHisAlaGluHisGluGlyLysProTyrCysAsnHisProCysTyrAlaAlaMetPheGlyProLysGlyPheGlyArgGlyGlyAlaGluSerHisThrPheLys';

    // test
    expect(screen.getByText(threeLetter));
  });
}); */



