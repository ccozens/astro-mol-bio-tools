

// MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK


import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import { Molecule } from '../../src/types';
import Input from '../../src/components/react/Input';
import { CountAminoAcids } from '../../src/components/react/protein/CountAminoAcids';
import { ComputeProteinMW } from '../../src/components/react/protein/ComputeProteinMw';
import { ComputeExtinctionCoefficients } from '../../src/components/react/protein/ComputeExtinctionCoefficients';

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