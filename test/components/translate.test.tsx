import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import TranslateDna from '../../src/components/react/TranslateDna';
import { formatChooserStore } from '../../src/stores/formatChooserStore';
import { Molecule } from '../../src/types';

// tbj-tab for test block

describe('test DNA translation', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for translate protein'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Dna}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for translate protein'
    );
  });

  test('test error message', async () => {
    // define input
    const dna = 'CCGGTT;ACGTACGT5'

     // enter DNA into input box
     await user.type(inputBox, dna);
     expect(inputBox).toHaveValue(dna);
     // render output
     render(
       <TranslateDna />
     );

    // expected output
    const expected = 'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 7, 16.'
    // test
    expect(screen.getByText(expected));
  });

  test('oneLetter, no spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'SNLSGNGGGRCGVFGGGSGRSGACGWVSAREAARRQRVSRSWRRASGALAAARGG';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'oneLetter',
      spacer: '',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('oneLetter, period spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'S.N.L.S.G.N.G.G.G.R.C.G.V.F.G.G.G.S.G.R.S.G.A.C.G.W.V.S.A.R.E.A.A.R.R.Q.R.V.S.R.S.W.R.R.A.S.G.A.L.A.A.A.R.G.G';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'oneLetter',
      spacer: '.',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('oneLetter, hyphen spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'S-N-L-S-G-N-G-G-G-R-C-G-V-F-G-G-G-S-G-R-S-G-A-C-G-W-V-S-A-R-E-A-A-R-R-Q-R-V-S-R-S-W-R-R-A-S-G-A-L-A-A-A-R-G-G';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'oneLetter',
      spacer: '-',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('oneLetter, space spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'S N L S G N G G G R C G V F G G G S G R S G A C G W V S A R E A A R R Q R V S R S W R R A S G A L A A A R G G';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'oneLetter',
      spacer: ' ',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('threeLetter, no spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'SerAsnLeuSerGlyAsnGlyGlyGlyArgCysGlyValPheGlyGlyGlySerGlyArgSerGlyAlaCysGlyTrpValSerAlaArgGluAlaAlaArgArgGlnArgValSerArgSerTrpArgArgAlaSerGlyAlaLeuAlaAlaAlaArgGlyGly';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'threeLetter',
      spacer: '',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('threeLetter, period spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'Ser.Asn.Leu.Ser.Gly.Asn.Gly.Gly.Gly.Arg.Cys.Gly.Val.Phe.Gly.Gly.Gly.Ser.Gly.Arg.Ser.Gly.Ala.Cys.Gly.Trp.Val.Ser.Ala.Arg.Glu.Ala.Ala.Arg.Arg.Gln.Arg.Val.Ser.Arg.Ser.Trp.Arg.Arg.Ala.Ser.Gly.Ala.Leu.Ala.Ala.Ala.Arg.Gly.Gly';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'threeLetter',
      spacer: '.',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('threeLetter, hyphen spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'Ser-Asn-Leu-Ser-Gly-Asn-Gly-Gly-Gly-Arg-Cys-Gly-Val-Phe-Gly-Gly-Gly-Ser-Gly-Arg-Ser-Gly-Ala-Cys-Gly-Trp-Val-Ser-Ala-Arg-Glu-Ala-Ala-Arg-Arg-Gln-Arg-Val-Ser-Arg-Ser-Trp-Arg-Arg-Ala-Ser-Gly-Ala-Leu-Ala-Ala-Ala-Arg-Gly-Gly';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'threeLetter',
      spacer: '-',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });

  test('threeLetter, space spacer', async () => {
    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGA';
    // define expected output
    const protein = 'Ser Asn Leu Ser Gly Asn Gly Gly Gly Arg Cys Gly Val Phe Gly Gly Gly Ser Gly Arg Ser Gly Ala Cys Gly Trp Val Ser Ala Arg Glu Ala Ala Arg Arg Gln Arg Val Ser Arg Ser Trp Arg Arg Ala Ser Gly Ala Leu Ala Ala Ala Arg Gly Gly';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);

    // mock the nanostore containing outFormat and spacer choices
    const mockStore = {
      outFormat: 'threeLetter',
      spacer: ' ',
    };
    formatChooserStore.get = () => mockStore;
    
    // render output
    render(<TranslateDna />);

    //test
    expect(screen.getByText(protein));
  });


  test('translateDna should complain if DNA is not in triplets', async () => {
    //setup
    const dna =
      'TCGTTAGATAGTCCCTTGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGTCCGCGGACGCCGACCCACTCGCGTGCGCTCCGGCTCCGCCGTCGCACAAAGATCCAGCACCGCAGCCCGAAGGCCTCGAAACCGCCGTCGATCCCCTCCTAAA';
    //expected
    const error =
      'DNA is not in triplets - please input sequence with complete triplets.';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(<TranslateDna />);
    // test

    expect(screen.getByText(error));
  });
});
