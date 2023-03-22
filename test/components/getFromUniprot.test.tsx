import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetch from 'node-fetch';
// import modules to test
import GetFromUniprot from "../../src/components/react/protein/GetFromUniprot";
import Input from '../../src/components/react/Input';
import { Molecule } from '../../src/types';
import { server } from '../../src/setupTests';

interface Data {
  message: string;
  sequence: string;
  length: number;
}

describe('My API tests', () => {
  // setup mock server
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  // setup input box
  const user = userEvent.setup();
  let searchInputBox: HTMLElement;
  let proteinInputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    // render page
    render(<GetFromUniprot ariaLabelContent={'Format protein'} />);
    // set searchInputBox
    searchInputBox = screen.getByRole('textbox', {
      name: /get a sequence by uniprot accession:/i
    });

  });

  

  test('should make correct API request', async() => {
    // set input
    const input = 'P33333';
    // enter input
    await user.type(searchInputBox, input);
    expect(searchInputBox).toHaveValue(input);
    // expected response
    const message = 'Fetched accession P33333 : 1-acyl-sn-glycerol-3-phosphate acyltransferase from Saccharomyces cerevisiae (strain ATCC 204508 / S288c)';
   
    expect(screen.findAllByText(message)).toBeTruthy();
    
    
  });

  test('should return mocked data from external API call', async () => {
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



