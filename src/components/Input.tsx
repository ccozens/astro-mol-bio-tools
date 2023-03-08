import { useState } from 'react';
import { checkDnaInput } from '../functions/checkDnaInput';
import { reverseComplementDNA } from '../functions/reverseComplementFunction';
import { Molecule } from '../functions/utilFunctions';
import CopyButton from '../components/CopyButton';

interface LabelProps {
  ariaLabelContent: string;
}
export default function Input({ ariaLabelContent }: LabelProps) {
  // store input, linked to textArea {value}
  const [input, setInput] = useState('');
  // check input
  const checkedInput = checkDnaInput(input, Molecule.Dna);
  // reverse complement checked input
  const reverseComplement = reverseComplementDNA(checkedInput);

  // placeholder for form
  const placeholderText = 'Enter DNA here...';
  return (
    <div>
      <textarea
        id="textArea"
        className="textArea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        aria-label={ariaLabelContent}
        autoFocus
        autoCorrect="off"
        placeholder={placeholderText}
        maxLength={10000}
      />

      <div className="outputBox">{reverseComplement}</div>
      <CopyButton copyButtonContent={reverseComplement} />
    </div>
  );
}
