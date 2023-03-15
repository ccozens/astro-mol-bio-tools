import { useStore } from '@nanostores/react';
import { inputStore } from '../../../stores/input';
import { computeProteinMW } from '../../../functions/computeProteinMW';
import type { InputLabelProps } from '../../../types';
import type { MouseEvent } from 'react';

export default function ComputeProteinMw({
  ariaLabelContent,
  inputType
}: InputLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);
  const proteinArray = Array.from(sanitisedInputFromStore);
  const proteinMw =
    sanitisedInputFromStore === ''
      ? 0
      : computeProteinMW(proteinArray);

  function copyProteinMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMw));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Protein MW</p>
      <p className="countItem" aria-label="proteinMw">
        {' '}
        {Number(proteinMw / 1000).toFixed(2)} kD
        <span
          className="material-symbols-outlined"
          onClick={copyProteinMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
