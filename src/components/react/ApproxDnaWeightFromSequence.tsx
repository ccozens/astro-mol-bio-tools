import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  approxSsDnaMw,
  approxDsDnaMw,
} from '../../functions/dnaWeight';
import type { InputLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function ApproxDnaWeightFromSequence({
  ariaLabelContent,
}: InputLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);

  if (sanitisedInputFromStore.includes('Non-DNA')) {
    return <div className="outputBox">{sanitisedInputFromStore}</div>;
  }

  let calcApproxSsDnaMw: number = 0;
  let calcApproxDsDnaMw: number = 0;

  calcApproxSsDnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : approxSsDnaMw(sanitisedInputFromStore);
  calcApproxDsDnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : approxDsDnaMw(sanitisedInputFromStore);

  function copyApproxDsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxDsDnaMw));
  }
  function copyApproxSsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxSsDnaMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx sequence MW</p>
      <hr />
      <p className="countItem" aria-label="approxDsMw">
        dsDNA: {Number(calcApproxDsDnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyApproxSsDnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem" aria-label="approxSsMw">
        ssDNA: {Number(calcApproxSsDnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyApproxDsDnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
