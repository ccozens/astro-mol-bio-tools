import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import CountNucleotides from '../../src/components/react/CountNucletides';
import RnaWeightFromLength from '../../src/components/react/RnaWeightFromLength';
import ExactRnaWeightFromSequence from '../../src/components/react/ExactRnaWeightFromSequence';
import ApproxRnaWeightFromSequence from '../../src/components/react/ApproxRnaWeightFromSequence';
import { Molecule } from '../../src/types';

describe('test RNA params', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for RNA parameters'}
        placeholderText={'Enter RNA sequence here...'}
        inputType={Molecule.Rna}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for RNA parameters'
    );
  });
  test('test error message', async () => {
    // define input
    const rna = 'AAQTRTLGUGVCGC';

    // enter DNA into input box
    await user.type(inputBox, rna);
    expect(inputBox).toHaveValue(rna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );

    // expected output
    const expected =
      'Non-RNA character entered, please enter AUCG only. Non-RNA characters at positions: 3, 4, 5, 6, 7, 11.';
    // test
    expect(screen.getByText(expected));
  });

  test('test nucleotide counting', async () => {
    //define input
    const rna = 'AAUUGGCC';
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
    await user.type(inputBox, rna);
    expect(inputBox).toHaveValue(rna);
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
    const rna =
      'AUGAUCCUCGAUACAGACUACAUAACUGAGGAUGGAAAGCCCGUCAUCAGGAUCUUCAAGAAGGAGAACGGCGAGUUCAAAAUAGACUACGACAGAAACUUUGAGCCAUACAUCUACGCGCUCUUGAAGGACGACUCUGCGAUUGAGGACGUCAAGAAGAUAACUGCCGAGAGGCACGGCACUACCGUUAGGGUUGUCAGGGCCGAGAAAGUGAAGAAGAAGUUCCUAGGCAGGCCGAUAGAGGUCUG';
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
    await user.type(inputBox, rna);
    expect(inputBox).toHaveValue(rna);
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

  describe('test exact RNA MW calculations', () => {
    const user = userEvent.setup();
    let inputBox: HTMLElement;
    // reset input after each test
    beforeEach(() => {
      render(
        <Input
          ariaLabelContent={'RNA input form for RNA parameters'}
          placeholderText={'Enter RNA sequence here...'}
          inputType={Molecule.Rna}
        />
      );
      inputBox = screen.getByLabelText(
        'DNA input form for RNA parameters'
      );
    });
    test('first test sequence', async () => {
      //define input
      const rna = 'AAUUGGCC';
      // define expected output
      const calcExactDsRnaMw = 5.3;
      const calcExactSsRnaMw = 2.65;

      // enter DNA into input box
      await user.type(inputBox, rna);
      expect(inputBox).toHaveValue(rna);
      // render output
      render(
        <ExactRnaWeightFromSequence
          ariaLabelContent={'Exact RNA weight from sequence'}
        />
      );

      //test
      expect(screen.getByLabelText('exactDsRnaMw')).toHaveTextContent(
        String(calcExactDsRnaMw)
      );
      expect(screen.getByLabelText('exactSsRnaMw')).toHaveTextContent(
        String(calcExactSsRnaMw)
      );
    });

    test('first second sequence', async () => {
      //define input
      const rna =
        'AUGAUCCUCGAUACAGACUACAUAACUGAGGAUGGAAAGCCCGUCAUCAGGAUCUUCAAGAAGGAGAACGGCGAGUUCAAAAUAGACUACGACAGAAACUUUGAGCCAUACAUCUACGCGCUCUUGAAGGACGACUCUGCGAUUGAGGACGUCAAGAAGAUAACUGCCGAGAGGCACGGCACUACCGUUAGGGUUGUCAGGGCCGAGAAAGUGAAGAAGAAGUUCCUAGGCAGGCCGAUAGAGGUCUG';
      // define expected output

      const calcExactDsRnaMw = 161.02;
      const calcExactSsRnaMw = 80.51;

      // enter DNA into input box
      await user.type(inputBox, rna);
      expect(inputBox).toHaveValue(rna);
      // render output
      render(
        <ExactRnaWeightFromSequence
          ariaLabelContent={'Exact RNA weight from sequence'}
        />
      );

      //test
      expect(screen.getByLabelText('exactDsRnaMw')).toHaveTextContent(
        String(calcExactDsRnaMw)
      );
      expect(screen.getByLabelText('exactSsRnaMw')).toHaveTextContent(
        String(calcExactSsRnaMw)
      );
    });
  });
});
describe('test approx RNA MW calculations', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for RNA parameters'}
        placeholderText={'Enter RNA sequence here...'}
        inputType={Molecule.Rna}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for RNA parameters'
    );
  });

  test('first test sequence', async () => {
    //define input
    const rna = 'AAUUGGCC';
    // define expected output
    const calcApproxDsRnaMw = 5.29;
    const calcApproxSsRnaMw = 2.72;

    // enter DNA into input box
    await user.type(inputBox, rna);
    expect(inputBox).toHaveValue(rna);
    // render output
    render(
      <ApproxRnaWeightFromSequence
        ariaLabelContent={'Approx RNA weight from sequence'}
      />
    );

    //test
    expect(screen.getByLabelText('approxDsRnaMw')).toHaveTextContent(
      String(calcApproxDsRnaMw)
    );
    expect(screen.getByLabelText('approxSsRnaMw')).toHaveTextContent(
      String(calcApproxSsRnaMw)
    );
  });

  test('first second sequence', async () => {
    //define input
    const rna =
      'AUGAUCCUCGAUACAGACUACAUAACUGAGGAUGGAAAGCCCGUCAUCAGGAUCUUCAAGAAGGAGAACGGCGAGUUCAAAAUAGACUACGACAGAAACUUUGAGCCAUACAUCUACGCGCUCUUGAAGGACGACUCUGCGAUUGAGGACGUCAAGAAGAUAACUGCCGAGAGGCACGGCACUACCGUUAGGGUUGUCAGGGCCGAGAAAGUGAAGAAGAAGUUCCUAGGCAGGCCGAUAGAGGUCUG';
    // define expected output

    const calcApproxDsRnaMw = 159.13;
    const calcApproxSsRnaMw = 79.64;

    // enter DNA into input box
    await user.type(inputBox, rna);
    expect(inputBox).toHaveValue(rna);
    // render output
    render(
      <ApproxRnaWeightFromSequence
        ariaLabelContent={'Exact RNA weight from sequence'}
      />
    );

    //test
    expect(screen.getByLabelText('approxDsRnaMw')).toHaveTextContent(
      String(calcApproxDsRnaMw)
    );
    expect(screen.getByLabelText('approxSsRnaMw')).toHaveTextContent(
      String(calcApproxSsRnaMw)
    );
  });
});
