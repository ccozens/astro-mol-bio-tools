import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import { useState } from 'react';

export default function Input() {
  const [input, setInput] = useState('');

  const handleTextChange: React.ChangeEventHandler<
    HTMLTextAreaElement
  > = (event) => {
    // set input to entered text
    setInput(event.target.value);
    console.log(input);
  };

  //   prevents text being reset when click out of textarea

  // T-385 pass label and placeholderthrough props when instantiate
  // const {label} = Astro.props;
  const label = 'DNA input form for reverse complement';
  const placeholderText = 'Enter DNA here...';
  return (
    <div>

      <textarea
        id="textArea"
        className="textArea"
        value={input}
        onChange={handleTextChange}
        // onClick={handleClick}
        // type="text"
        aria-label={label}
        autoFocus
        autoCorrect="off"
        placeholder={placeholderText}
        maxLength={10000}
      />

        <div className="outputBox">

        </div>

    </div>
  );
}
