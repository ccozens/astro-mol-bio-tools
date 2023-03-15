import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import CountNucleotides from '../../src/components/react/dna/CountNucletides';
import DnaWeightFromLength from '../../src/components/react/dna/DnaWeightFromLength';
import ExactDnaWeightFromSequence from '../../src/components/react/dna/ExactDnaWeightFromSequence';
import ApproxDnaWeightFromSequence from '../../src/components/react/dna/ApproxDnaWeightFromSequence';
import { Molecule } from '../../src/types';

describe('test nucleotide counting', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for DNA parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Dna}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for DNA parameters'
    );
  });

  test('test error message', async () => {
    // define input
    const dna = 'AAQTRTLGUGVCGC';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );

    // expected output
    const expected =
      'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 3, 5, 7, 9, 11.';
    // test
    expect(screen.getByText(expected));
  });

  test('test nucleotide counting', async () => {
    //define input
    const dna = 'AATTGGCC';
    // define expected output
    const ntCounts = {
      A: { count: 2, ratio: 0.25 },
      C: { count: 2, ratio: 0.25 },
      G: { count: 2, ratio: 0.25 },
      T: { count: 2, ratio: 0.25 },
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
    expect(screen.getByLabelText('Acount')).toHaveTextContent(
      String(ntCounts.A.count)
    );
    expect(screen.getByLabelText('Ccount')).toHaveTextContent(
      String(ntCounts.C.count)
    );
    expect(screen.getByLabelText('Gcount')).toHaveTextContent(
      String(ntCounts.G.count)
    );
    expect(screen.getByLabelText('Tcount')).toHaveTextContent(
      String(ntCounts.T.count)
    );
    expect(screen.getByLabelText('Aratio')).toHaveTextContent(
      String(ntCounts.A.ratio)
    );
    expect(screen.getByLabelText('Cratio')).toHaveTextContent(
      String(ntCounts.C.ratio)
    );
    expect(screen.getByLabelText('Gratio')).toHaveTextContent(
      String(ntCounts.G.ratio)
    );
    expect(screen.getByLabelText('Tratio')).toHaveTextContent(
      String(ntCounts.T.ratio)
    );
    expect(screen.getByLabelText('Totalcount')).toHaveTextContent(
      String(ntCounts.Total)
    );
    expect(screen.getByLabelText('GCcount')).toHaveTextContent(
      String(ntCounts.GC)
    );
  });

  test('second test sequence', async () => {
    //define input
    const dna =
      'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTG';
    // define expected output
    const ntCounts = {
      A: { count: 79, ratio: 0.32 },
      C: { count: 53, ratio: 0.21 },
      G: { count: 70, ratio: 0.28 },
      T: { count: 46, ratio: 0.19 },
      Total: 248,
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
    expect(screen.getByLabelText('Acount')).toHaveTextContent(
      String(ntCounts.A.count)
    );
    expect(screen.getByLabelText('Ccount')).toHaveTextContent(
      String(ntCounts.C.count)
    );
    expect(screen.getByLabelText('Gcount')).toHaveTextContent(
      String(ntCounts.G.count)
    );
    expect(screen.getByLabelText('Tcount')).toHaveTextContent(
      String(ntCounts.T.count)
    );
    expect(screen.getByLabelText('Aratio')).toHaveTextContent(
      String(ntCounts.A.ratio)
    );
    expect(screen.getByLabelText('Cratio')).toHaveTextContent(
      String(ntCounts.C.ratio)
    );
    expect(screen.getByLabelText('Gratio')).toHaveTextContent(
      String(ntCounts.G.ratio)
    );
    expect(screen.getByLabelText('Tratio')).toHaveTextContent(
      String(ntCounts.T.ratio)
    );
    expect(screen.getByLabelText('Totalcount')).toHaveTextContent(
      String(ntCounts.Total)
    );
    expect(screen.getByLabelText('GCcount')).toHaveTextContent(
      String(ntCounts.GC)
    );
  });
});

describe('test exact DNA MW calculations', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for DNA parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Dna}
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
    const calcExactDsDnaMw = 5.1;
    const calcExactSsDnaMw = 2.55;

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
    expect(screen.getByLabelText('exactDsMw')).toHaveTextContent(
      String(calcExactDsDnaMw)
    );
    expect(screen.getByLabelText('exactSsMw')).toHaveTextContent(
      String(calcExactSsDnaMw)
    );
  });

  test('first second sequence', async () => {
    //define input
    const dna =
      'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTG';
    // define expected output

    const calcExactDsDnaMw = 154.37;
    const calcExactSsDnaMw = 77.19;

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
    expect(screen.getByLabelText('exactDsMw')).toHaveTextContent(
      String(calcExactDsDnaMw)
    );
    expect(screen.getByLabelText('exactSsMw')).toHaveTextContent(
      String(calcExactSsDnaMw)
    );
  });
});

describe('test approx DNA MW calculations', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for DNA parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Dna}
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
    const calcApproxDsDnaMw = 5.02;
    const calcApproxSsDnaMw = 2.51;

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <ApproxDnaWeightFromSequence
        ariaLabelContent={'Approx DNA weight from sequence'}
      />
    );

    //test
    expect(screen.getByLabelText('approxDsMw')).toHaveTextContent(
      String(calcApproxDsDnaMw)
    );
    expect(screen.getByLabelText('approxSsMw')).toHaveTextContent(
      String(calcApproxSsDnaMw)
    );
  });

  test('first second sequence', async () => {
    //define input
    const dna =
      'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTG';
    // define expected output

    const calcApproxDsDnaMw = 150.79;
    const calcApproxSsDnaMw = 75.4;

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <ApproxDnaWeightFromSequence
        ariaLabelContent={'Exact DNA weight from sequence'}
      />
    );

    //test
    expect(screen.getByLabelText('approxDsMw')).toHaveTextContent(
      String(calcApproxDsDnaMw)
    );
    expect(screen.getByLabelText('approxSsMw')).toHaveTextContent(
      String(calcApproxSsDnaMw)
    );
  });
});

describe('test DNA MW from length calculations', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <DnaWeightFromLength
        ariaLabelContent={'DNA input form for DNA parameters'}
        placeholderText={'Enter RNA sequence here...'}
        inputType={Molecule.Dna}
      />
    );
    inputBox = screen.getByLabelText(
      'dnaLengthInput'
    );
  });

  test('first test sequence', async () => {
    //define input
    const len = String(100);
    // define expected output
    const ssDnaMwFromLength = 30.45;
    const dsDnaMwFromLength = 60.90;

    // enter DNA into input box
    await user.type(inputBox, len);
    expect(inputBox).toHaveValue(len);
    
    //test
    expect(screen.getByLabelText('approxSsDnaMw')).toHaveTextContent(
      String(ssDnaMwFromLength)
    );
    expect(screen.getByLabelText('approxDsDnaMw')).toHaveTextContent(
      String(dsDnaMwFromLength)
    );
  });
  });