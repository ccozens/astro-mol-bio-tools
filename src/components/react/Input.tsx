import { useState } from 'react';
import { inputStore } from '../../stores/input';
import { sanitiseInput } from '../../functions/utilFunctions';
interface LabelProps {
  ariaLabelContent: string;
  placeholderText: string;
}
export default function Input({
  ariaLabelContent,
  placeholderText,
}: LabelProps) {
  // store input, linked to textArea value={input}, and sanitise input before storing {inputStore.set(sanitisedInput)}
  const [input, setInput] = useState('');
  const sanitisedInput = sanitiseInput(input);
  inputStore.set(sanitisedInput);

  return (
      <div>
        <textarea
          id="textArea"
          className="textArea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label={ariaLabelContent}
          autoFocus
          autoCorrect="new-password"
          placeholder={placeholderText}
          maxLength={10000}
        />
      </div>
  );
}
