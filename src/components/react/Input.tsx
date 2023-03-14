import { useState, ChangeEvent, useEffect } from 'react';
import { inputStore } from '../../stores/input';
import { sanitiseInput } from '../../functions/utilFunctions/sanitiseInput';
import { checkDnaInput } from '../../functions/checkDnaInput';
import type { InputLabelProps, ErrorMessageProps } from '../../types';

export default function Input({
  ariaLabelContent,
  placeholderText,
  inputType,
}: InputLabelProps) {
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setIsError] = useState(false);

  // store input, linked to textArea value={input}, and sanitise input before storing {inputStore.set(sanitisedInput)}
  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(sanitiseInput(e.target.value));
  }

  useEffect(() => {
    // logic if DNA entered
    if (inputType === 1 || inputType === 2) {
      // is an enum, so this = Molecule.Dna or Molecule.Rna
      const checkedDnaInput = checkDnaInput(input, inputType);
      if (checkedDnaInput === input) {
        inputStore.set(checkedDnaInput);
        setIsError(false);
      }
      if (checkedDnaInput !== input) {
        setErrorMessage(
          inputType === 1 ?
          `Non-DNA character entered, please enter ATCG only.  Non-DNA characters at positions: ${checkedDnaInput}.`
          : 
          `Non-RNA character entered, please enter AUCG only.  Non-RNA characters at positions: ${checkedDnaInput}.`
        );
        setIsError(true)
      }
    }
    if (inputType === 0) {
      // is an enum, so this = Molecule.Protein
      // need to rewrite checkOneLetterProteinInput and/or threeLetter and decide what to do about choosing between them (an additional helper function?) as per checkDnaInput
    }
  }, [input]);

  function ShowErrorMessage({ errorMessage }: ErrorMessageProps) {
    if (!isError) {
      return null;
    }
    return <p className="textArea_message">{errorMessage}</p>;
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
      <ShowErrorMessage errorMessage={errorMessage} />
    </div>
  );
}
