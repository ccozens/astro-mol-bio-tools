import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  exactSsRnaMw,
  exactDsRnaMw,
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

  let calcExactSsRnaMw: number = 0;
  let calcExactDsRnaMw: number = 0;

  calcExactSsRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : exactSsRnaMw(sanitisedInputFromStore);
  calcExactDsRnaMw =
    sanitisedInputFromStore === ''
      ? 0
      : exactDsRnaMw(sanitisedInputFromStore);

  function copyExactSsRnaMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcExactSsRnaMw));
  }
  function copyExactDsRnaMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(calcExactDsRnaMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">
        Exact sequence MW
      </p>
      <hr />
      <p className="countItem" aria-label="exactSsRnaMw">
        ssRNA: {Number(calcExactSsRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyExactSsRnaMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countItem" aria-label="exactDsRnaMw">
        dsRNA: {Number(calcExactDsRnaMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyExactDsRnaMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
