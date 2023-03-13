import {
  approxSsDnaFromLength,
  approxDsDnaFromLength,
} from '../../functions/dnaWeight';
import { useState, ChangeEvent } from 'react';
import type { AriaLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function DnaWeight({
  ariaLabelContent,
}: AriaLabelProps) {
  // data from input
  const [lengthInput, setLengthInput] = useState(0);

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setLengthInput(Number(onlyNums));
  }

  let calcApproxSsDnaFromLength: number = 0;
  let calcApproxDsDnaFromLength: number = 0;

  //DNA
  calcApproxSsDnaFromLength =
    lengthInput === 0 ? 0 : approxSsDnaFromLength(lengthInput);
  calcApproxDsDnaFromLength =
    lengthInput === 0 ? 0 : approxDsDnaFromLength(lengthInput);

  function copyDsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxDsDnaFromLength));
  }
  function copySsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxSsDnaFromLength));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx MW from DNA length</p>
      <hr />
      <label className="innerInputLabel">
        DNA length:
        <input
          id="dnaLengthInput"
          className="innerInputBox"
          value={lengthInput}
          onChange={handleInput}
          type="text"
        />
      </label>
      <p className="countItem">
        dsDNA:{' '}
        {Number(calcApproxSsDnaFromLength / 1000).toFixed(2) +
          ' kD  '}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyDsDnaOnClick}
        >
          content_copy
        </span>
      </p>
      <p className="countItem">
        ssDNA:{' '}
        {Number(calcApproxDsDnaFromLength / 1000).toFixed(2) + ' kD'}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copySsDnaOnClick}
        >
          content_copy
        </span>
      </p>
    </div>
  );
}
