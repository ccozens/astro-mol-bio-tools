import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  approxRnaMw,
  exactRnaMw,
} from '../../functions/dnaWeight';
import type { InputLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function ExactRnaWeightFromSequence({
  ariaLabelContent,
}: InputLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);

  if (sanitisedInputFromStore.includes('Non-DNA')) {
    return <div className="outputBox">{sanitisedInputFromStore}</div>;
  }

  let calcExactRnaMw: number = 0;
  let calcApproxRnaMw: number = 0;

  calcExactRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : approxRnaMw(sanitisedInputFromStore);
  calcApproxRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : exactRnaMw(sanitisedInputFromStore);

  function copyExactRnaMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcApproxRnaMw));
  }
  function copyApproxRnaMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcExactRnaMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">
        Exact sequence MW
      </p>
      <hr />
      <p className="countItem">
        dsRNA: {Number(calcApproxRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyApproxRnaMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem">
        ssRNA: {Number(calcExactRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyExactRnaMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
