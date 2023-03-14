import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import CountNucleotides from '../../src/components/react/CountNucletides';
import RnaWeightFromLength from '../../src/components/react/RnaWeightFromLength';
import ExactDnaWeightFromSequence from '../../src/components/react/ExactRnaWeightFromSequence';
import ApproxRnaWeightFromSequence from '../../src/components/react/ApproxRnaWeightFromSequence';
import { Molecule } from '../../src/types';


describe('test nucleotide counting', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for RNA parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Rna}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for RNA parameters'
    );
  });
  test('test error message', async () => {
    // define input
    const dna = 'AAQTRTLGUGVCGC'

     // enter DNA into input box
     await user.type(inputBox, dna);
     expect(inputBox).toHaveValue(dna);
     // render output
     render(
       <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
     );
     
    // expected output
    const expected = 'Non-RNA character entered, please enter AUCG only. Non-RNA characters at positions: 3, 4, 5, 6, 7, 11.'
    // test
    expect(screen.getByText(expected));
  });
  
  test('test nucleotide counting', async () => {
    //define input
    const dna = 'AAUUGGCC';
    // define expected output
    const ntCounts = {
      A: {count: 2, ratio: 0.25},
      C: {count: 2, ratio: 0.25},
      G: {count: 2, ratio: 0.25},
      T: {count: 2, ratio: 0.25},
      Total: 8,
      GC: 0.5,
    };

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );
    //test
    expect(screen.getByLabelText('Acount')).toHaveTextContent(String(ntCounts.A.count));
    expect(screen.getByLabelText('Ccount')).toHaveTextContent(String(ntCounts.C.count));
    expect(screen.getByLabelText('Gcount')).toHaveTextContent(String(ntCounts.G.count));
    expect(screen.getByLabelText('Tcount')).toHaveTextContent(String(ntCounts.T.count));
    expect(screen.getByLabelText('Aratio')).toHaveTextContent(String(ntCounts.A.ratio));
    expect(screen.getByLabelText('Cratio')).toHaveTextContent(String(ntCounts.C.ratio));
    expect(screen.getByLabelText('Gratio')).toHaveTextContent(String(ntCounts.G.ratio));
    expect(screen.getByLabelText('Tratio')).toHaveTextContent(String(ntCounts.T.ratio));
    expect(screen.getByLabelText('Totalcount')).toHaveTextContent(String(ntCounts.Total));
    expect(screen.getByLabelText('GCcount')).toHaveTextContent(String(ntCounts.GC));
    
    
  });

  test('second test sequence', async () => {
    //define input
    const dna = 'AUGAUCCUCGAUACAGACUACAUAACUGAGGAUGGAAAGCCCGUCAUCAGGAUCUUCAAGAAGGAGAACGGCGAGUUCAAAAUAGACUACGACAGAAACUUUGAGCCAUACAUCUACGCGCUCUUGAAGGACGACUCUGCGAUUGAGGACGUCAAGAAGAUAACUGCCGAGAGGCACGGCACUACCGUUAGGGUUGUCAGGGCCGAGAAAGUGAAGAAGAAGUUCCUAGGCAGGCCGAUAGAGGUCUG';
    // define expected output
    const ntCounts = {
      A: {count: 79, ratio: 0.32},
      C: {count: 53, ratio: 0.21},
      G: {count: 70, ratio: 0.28},
      T: {count: 46, ratio: 0.19},
      Total: 248,
      GC: 0.50,
    };
    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );

    //test
    expect(screen.getByLabelText('Acount')).toHaveTextContent(String(ntCounts.A.count));
    expect(screen.getByLabelText('Ccount')).toHaveTextContent(String(ntCounts.C.count));
    expect(screen.getByLabelText('Gcount')).toHaveTextContent(String(ntCounts.G.count));
    expect(screen.getByLabelText('Tcount')).toHaveTextContent(String(ntCounts.T.count));
    expect(screen.getByLabelText('Aratio')).toHaveTextContent(String(ntCounts.A.ratio));
    expect(screen.getByLabelText('Cratio')).toHaveTextContent(String(ntCounts.C.ratio));
    expect(screen.getByLabelText('Gratio')).toHaveTextContent(String(ntCounts.G.ratio));
    expect(screen.getByLabelText('Tratio')).toHaveTextContent(String(ntCounts.T.ratio));
    expect(screen.getByLabelText('Totalcount')).toHaveTextContent(String(ntCounts.Total));
    expect(screen.getByLabelText('GCcount')).toHaveTextContent(String(ntCounts.GC));
});

/* 
describe('test DNA MW calculations', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for DNA parameters'}
        placeholderText={'Enter DNA sequence here...'}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for DNA parameters'
    );
  });

  test('first test sequence', async () => {
    //define input
    const dna = 'AATTGGCC';
    // define expected output
    // const calcApproxSsDnaFromLength = 0.00;
    // const calcApproxDsDnaFromLength = 0.00;
    // const calcApproxDsDnaMw = 2508.6;
    // const calcApproxSsDnaMw = 5017.2;
    const calcExactSsDnaMw = 'ssDNA';
    const calcExactDsDnaMw = 'dsDNA';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
        <ExactDnaWeightFromSequence
        ariaLabelContent={'Exact DNA weight from sequence'}
        />
    );

    //test
    const outputBox = screen.getByLabelText('Exact DNA weight from sequence');
    // expect(screen.getByText(calcApproxDsDnaFromLength));
    // expect(screen.getByText(calcApproxSsDnaFromLength));
    // expect(screen.getByText(calcApproxDsDnaMw));
    // expect(screen.getByText(calcApproxSsDnaMw));
    expect(outputBox).toHaveValue(calcExactDsDnaMw);
    expect(screen.getByText(calcExactSsDnaMw));
    
  }); */

 /*  test('second test sequence', async () => {
    //define input
    const dna = 'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTG';
    // define expected output
    const ntCounts = { A: 79, C: 53, G: 70, U: 46, Total: 248, GC: 0.496};

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <DnaWeight ariaLabelContent={'DNA weight'} />
    );

    //test
    expect(screen.getByText(`A: ${ntCounts.A}`));
    expect(screen.getByText(`C: ${ntCounts.C}`));
    expect(screen.getByText(`G: ${ntCounts.G}`));
    expect(screen.getByText(`U: ${ntCounts.T}`));
    expect(screen.getByText(`Total: ${ntCounts.Total}`));
    expect(screen.getByText(`GC: ${ntCounts.GC}`));
  }); */
});