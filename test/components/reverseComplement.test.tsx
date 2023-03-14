import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import ReverseComplement from '../../src/components/react/ReverseComplement';
import { Molecule } from '../../src/types';

// tbj-tab for test block

describe('test DNA reverse complement', () => {
  const user = userEvent.setup();
  let inputBox:HTMLElement ;
// reset input after each test
  beforeEach(() => {
  render(
    <Input
      ariaLabelContent={'DNA input form for reverse complement'}
      placeholderText={'Enter DNA sequence here...'}
      inputType={Molecule.Dna}
    />
  );
  inputBox = screen.getByLabelText('DNA input form for reverse complement');
  });

  test('first test sequence', async() => {
  
    //define input
    const dna = 'AATTGGCC';
    // define expected output
    const reverseComplementOfDna = 'GGCCAATT';
    
    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(<ReverseComplement />);
    
    //test
    expect(screen.getByText(reverseComplementOfDna));
   
  
  });

  test('second test sequence', async() => {
    expect(inputBox).toHaveValue('');
    //define input
    const dna = 'GTGCATGCA';
    // define expected output
    const reverseComplementOfDna = 'TGCATGCAC';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    await render(<ReverseComplement />);
    

    //test
    expect(screen.getByText(reverseComplementOfDna));

  });

  test('third test sequence', async() => {

    //define input
    const dna = 'AGCAATCTATCAGGGAACGGCGGTGGCCGGTGCGGCGTGTTCGGTGGCGGCTCTGGCCGCTCAGGCGCCTGCGGCTGGGTGAGCGCACGCGAGGCGGCGAGGCGGCAGCGTGTTTCTAGGTCGTGGCGTCGGGCTTCCGGAGCTTTGGCGGCAGCTAGGGGAGGAT';
    // define expected output
    const reverseComplementOfDna = 'ATCCTCCCCTAGCTGCCGCCAAAGCTCCGGAAGCCCGACGCCACGACCTAGAAACACGCTGCCGCCTCGCCGCCTCGCGTGCGCTCACCCAGCCGCAGGCGCCTGAGCGGCCAGAGCCGCCACCGAACACGCCGCACCGGCCACCGCCGTTCCCTGATAGATTGCT';
 
    
    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    await render(<ReverseComplement />);
 

    //test
    expect(screen.getByText(reverseComplementOfDna));
  });
});
