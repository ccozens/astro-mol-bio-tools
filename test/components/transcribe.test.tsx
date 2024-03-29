import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import Input from '../../src/components/react/Input';
import TranscribeDna from '../../src/components/react/dna/TranscribeDna';
import { Molecule } from '../../src/types';

// tbj-tab for test block

describe('test transcribe DNA', () => {
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

  test('test error message', async () => {
    // define input
    const dna = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

     // enter DNA into input box
     await user.type(inputBox, dna);
     expect(inputBox).toHaveValue(dna);
     // render output
     render(
       <TranscribeDna />
     );

    // expected output
    const expected = 'Non-DNA character entered, please enter ATCG only. Non-DNA characters at positions: 38.'
    // test
    expect(screen.getByText(expected));
  });
  test('first test sequence', async() => {
  

    //define input
    const dna = 'TTAACCGG';
    // define expected output
    const rna = 'UUAACCGG';
    
    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    render(<TranscribeDna />);
    

    //test
    expect(screen.getByText(rna));
   
    
  });

  test('second test sequence', async() => {
    expect(inputBox).toHaveValue('');
    //define input
    const dna = 'CACGTACGT';
    // define expected output
    const rna = 'CACGUACGU';

    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    await render(<TranscribeDna />);
    

    //test
    expect(screen.getByText(rna));

  });

  test('third test sequence', async() => {

    //define input
    const dna = 'TCGTTAGATAGTCCCTTGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGTCCGCGGACGCCGACCCACTCGCGTGCGCTCCGCCGCTCCGCCGTCGCACAAAGATCCAGCACCGCAGCCCGAAGGCCTCGAAACCGCCGTCGATCCCCTCCTA';
    // define expected output
    const rna = 'UCGUUAGAUAGUCCCUUGCCGCCACCGGCCACGCCGCACAAGCCACCGCCGAGACCGGCGAGUCCGCGGACGCCGACCCACUCGCGUGCGCUCCGCCGCUCCGCCGUCGCACAAAGAUCCAGCACCGCAGCCCGAAGGCCUCGAAACCGCCGUCGAUCCCCUCCUA';
 
    
    // enter DNA into input box
    await user.type(inputBox, dna);
    expect(inputBox).toHaveValue(dna);
    // render output
    await render(<TranscribeDna />);
 

    //test
    expect(screen.getByText(rna));
  });
});
