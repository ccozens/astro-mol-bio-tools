import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  approxSsRnaMw,
  approxDsRnaMw,
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

  let calcApproxSsRnaMw: number = 0;
  let calcApproxDsRnaMw: number = 0;

  calcApproxSsRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : approxSsRnaMw(sanitisedInputFromStore);
  calcApproxDsRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : approxDsRnaMw(sanitisedInputFromStore);

  function copyApproxDsRnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxDsRnaMw));
  }
  function copyApproxSsRnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxSsRnaMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx sequence MW</p>
      <hr />
      <p className="countItem" aria-label="approxSsRnaMw">
        ssRNA: {Number(calcApproxSsRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyApproxSsRnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem" aria-label="approxDsRnaMw">
        dsRNA: {Number(calcApproxDsRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyApproxDsRnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
