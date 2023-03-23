import { convertOneToThreeLetter } from '../../../functions/convertOneToThreeLetter';
import { convertThreeToOneLetter } from '../../../functions/convertThreeToOneLetter';
import { useState } from 'react';
import CopyButton from '../CopyButton';
import type {
  InputLabelProps,
  ErrorMessageProps,
} from '../../../types';
import type { ChangeEvent, MouseEvent } from 'react';
import { checkProteinThreeLetterInput } from '../../../functions/checkProteinThreeLetterInput';
import { checkProteinOneLetterInput } from '../../../functions/checkProteinOneLetterInput';

export default function FormatProtein({
  ariaLabelContent,
  placeholderText,
}: InputLabelProps) {
  const [input, setInput] = useState('');
  const [outFormat, setOutFormat] = useState('threeLetter');
  let errorMessage = '';
  let isError = false;

  // store input
  function handleInput(e: ChangeEvent<HTMLTextAreaElement>): void {
    setInput(e.target.value);
  }

  // toggle outFormat on click
  function updateOutFormat(e: MouseEvent) {
    outFormat === 'oneLetter'
      ? setOutFormat('threeLetter')
      : setOutFormat('oneLetter');
  }

  // do conversion with no checking
  let formattedProtein = '';

  // one to three conversion with checking
  if (outFormat === 'threeLetter') {
    const checkedProteinInput = checkProteinOneLetterInput(input, 0);
    if (checkedProteinInput !== input) {
      errorMessage = `Non-amino acid character entered, please enter natural AAs only.  Non-natural AA at positions: ${checkProteinOneLetterInput(
        input,
        0
      )}.`;
      isError = true;
    }
    if (checkedProteinInput === input) {
      formattedProtein = convertOneToThreeLetter(input);
      isError = false;
    }
  }

  // three to one conversion with checking
  if (outFormat === 'oneLetter') {
    const checkedProteinInput = checkProteinThreeLetterInput(input);
    if (checkedProteinInput !== input) {
      errorMessage = `Non-amino acid character entered, please enter natural AAs only.  Non-natural AA at positions: ${checkProteinThreeLetterInput(
        input
      )}.`;
      isError = true;
    }
    if (input.length % 3 !== 0) {
      errorMessage = `Three letter protein is not a multiple of 3, please enter a valid protein sequence.`;
      isError = true;
    }
    if (checkedProteinInput === input) {
      formattedProtein = convertThreeToOneLetter(input);
      isError = false;
    }
  }

  function ShowErrorMessage({ errorMessage }: ErrorMessageProps) {
    if (!isError) {
      return null;
    }
    return <p className="textArea_message">{errorMessage}</p>;
  }

  return (
    <div className="reactArea">
      <h2 className="proteinFormatHead">
        {outFormat === 'oneLetter'
          ? 'Convert three letter code to one letter code'
          : 'Convert one letter code to three letter code'}
      </h2>
      <div className="outputBox">{formattedProtein}</div>
      <ShowErrorMessage errorMessage={errorMessage} />
      <div className="buttons">
        <div
          className="formatChooser__outFormat componentButton copyButton"
          onClick={updateOutFormat}
          aria-label='Toggle output format'
        >
          {outFormat === 'oneLetter'
            ? ' One -> three letter   (MILD -> MetIleLeuAsp)'
            : 'Three -> one letter   (MetIleLeuAsp -> MILD)'}
        </div>
        <CopyButton copyButtonContent={formattedProtein} />
      </div>
      <textarea
        id="textArea"
        className="textArea"
        onInput={handleInput}
        aria-label='Protein input'
        autoFocus
        autoCorrect="new-password" // prevents autocorrection
        spellCheck="false" // removes red squiggles below input
        placeholder={placeholderText}
        maxLength={10000}
      />
    </div>
  );
}
