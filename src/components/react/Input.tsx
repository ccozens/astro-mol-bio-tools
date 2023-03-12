import { useState, ChangeEvent, useEffect } from 'react';
import { inputStore } from '../../stores/input';
import { sanitiseInput } from '../../functions/utilFunctions/sanitiseInput';
import { checkDnaInput } from '../../functions/checkDnaInput';
import type { Molecule } from '../../types';
interface LabelProps {
  ariaLabelContent: string;
  placeholderText: string;
  inputType: Molecule;
}
export default function Input({
  ariaLabelContent,
  placeholderText,
  inputType
}: LabelProps) {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  // store input, linked to textArea value={input}, and sanitise input before storing {inputStore.set(sanitisedInput)}
  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(sanitiseInput(e.target.value));
  }
  
  useEffect(() => {
    // logic if DNA entered
    if (inputType === 1) // is an enum, so this = Molecule.Dna
    {const checkedDnaInput = checkDnaInput(input, 1);
      if (checkedDnaInput === input) {inputStore.set(checkedDnaInput);}
      if (checkedDnaInput !== input) {setErrorMessage(`Non-DNA character entered, please enter ATCG only.  Non-DNA characters at positions: ${checkedDnaInput}`);}}
      if (inputType === 0) // is an enum, so this = Molecule.Protein
      {
        // need to rewrite checkOneLetterProteinInput and/or threeLetter and decide what to do about choosing between them (an additional helper function?) as per checkDnaInput
      }
      
      
  }, [input])
    
  interface ErrorMessageProps {
    errorMessage: string;
  };

  function ShowErrorMessage({errorMessage}: ErrorMessageProps) {
    if (errorMessage === '') { return null ;}
    return <p className="textArea_message">{errorMessage}</p> 
  }

  return (
    <div>
      <textarea
        id="textArea"
        className="textArea"
        value={input}
        onChange={handleInput}
        aria-label={ariaLabelContent}
        autoFocus
        autoCorrect="new-password" // prevents autocorrection
        spellCheck="false" // removes red squiggles below input
        placeholder={placeholderText}
        maxLength={10000}
      />
      <ShowErrorMessage errorMessage={errorMessage}/>
    </div>
  );
}
