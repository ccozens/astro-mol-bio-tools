import {
  approxSsRnaFromLength,
  approxDsRnaFromLength,
} from '../../functions/dnaWeight';
import { useState, ChangeEvent } from 'react';
import type { InputLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function DnaWeight({
  ariaLabelContent,
}: InputLabelProps) {
  // data from input
  const [lengthInput, setLengthInput] = useState(0);

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setLengthInput(Number(onlyNums));
  }

  let calcApproxSsRnaFromLength: number = 0;
  let calcApproxDsRnaFromLength: number = 0;

  //DNA
  calcApproxSsRnaFromLength =
    lengthInput === 0 ? 0 : approxSsRnaFromLength(lengthInput);
  calcApproxDsRnaFromLength =
    lengthInput === 0 ? 0 : approxDsRnaFromLength(lengthInput);

  function copyDsRnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxDsRnaFromLength));
  }
  function copySsRnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxSsRnaFromLength));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">MW from length</p>
      <hr />
      <label className="innerInputLabel">
        RNA length:
        <input
          id="dnaLengthInput"
          className="innerInputBox"
          value={lengthInput}
          onChange={handleInput}
          type="text"
        />
      </label>
      <p className="countItem">
        ssRNA:{' '}
        {Number(calcApproxSsRnaFromLength / 1000).toFixed(2) +
          ' kD  '}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyDsRnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem">
        dsRNA:{' '}
        {Number(calcApproxDsRnaFromLength / 1000).toFixed(2) + ' kD'}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copySsRnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
