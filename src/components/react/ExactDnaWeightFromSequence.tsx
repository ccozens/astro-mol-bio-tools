import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  exactSsDnaMw,
  exactDsDnaMw,
} from '../../functions/dnaWeight';
import type { AriaLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function ExactDnaWeightFromSequence({
  ariaLabelContent,
}: AriaLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);

  if (sanitisedInputFromStore.includes('Non-DNA')) {
    return <div className="outputBox">{sanitisedInputFromStore}</div>;
  }

  let calcExactSsDnaMw: number = 0;
  let calcExactDsDnaMw: number = 0;

  calcExactSsDnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : exactSsDnaMw(sanitisedInputFromStore);
  calcExactDsDnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : exactDsDnaMw(sanitisedInputFromStore);

  function copyExactDsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcExactDsDnaMw));
  }
  function copyExactSsDnaOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcExactSsDnaMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">
        Exact weights MW from DNA sequence
      </p>
      <hr />
      <p className="countItem">
        dsDNA: {Number(calcExactDsDnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyExactDsDnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem">
        ssDNA: {Number(calcExactSsDnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyExactSsDnaOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
