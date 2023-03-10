import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import CountNucleotides from '../../src/components/react/CountNucletides';

// tbj-tab for test block

describe('test nucleotide counting', () => {
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
    const ntCounts = { A: 2, T: 2, G: 2, C: 2, Total: 8 };

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );

    //test
    expect(screen.getByText(`A: ${ntCounts.A}`));
    expect(screen.getByText(`C: ${ntCounts.C}`));
    expect(screen.getByText(`G: ${ntCounts.G}`));
    expect(screen.getByText(`T: ${ntCounts.T}`));
    expect(screen.getByText(`Total: ${ntCounts.Total}`));
  });

  test('second test sequence', async () => {
    //define input
    const dna = 'ATGATCCTCGATACAGACTACATAACTGAGGATGGAAAGCCCGTCATCAGGATCTTCAAGAAGGAGAACGGCGAGTTCAAAATAGACTACGACAGAAACTTTGAGCCATACATCTACGCGCTCTTGAAGGACGACTCTGCGATTGAGGACGTCAAGAAGATAACTGCCGAGAGGCACGGCACTACCGTTAGGGTTGTCAGGGCCGAGAAAGTGAAGAAGAAGTTCCTAGGCAGGCCGATAGAGGTCTG';
    // define expected output
    const ntCounts = { A: 79, C: 53, G: 70, T: 46, Total: 248 };

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(
      <CountNucleotides ariaLabelContent={'Nucleotide counts'} />
    );

    //test
    expect(screen.getByText(`A: ${ntCounts.A}`));
    expect(screen.getByText(`C: ${ntCounts.C}`));
    expect(screen.getByText(`G: ${ntCounts.G}`));
    expect(screen.getByText(`T: ${ntCounts.T}`));
    expect(screen.getByText(`Total: ${ntCounts.Total}`));
  });
});
