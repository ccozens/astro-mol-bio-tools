import { useStore } from '@nanostores/react';
import { inputStore } from '../../../stores/input';
import { computeExtinctionCoefficients } from '../../../functions/computeExtinctionCoefficients';
import type { InputLabelProps } from '../../../types';
import type { MouseEvent } from 'react';

export default function ComputeExtinctionCoefficients({
  ariaLabelContent,
  inputType,
}: InputLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);

  const proteinExtinctionCoefficients =
    sanitisedInputFromStore === ''
      ? 0
      : computeExtinctionCoefficients(sanitisedInputFromStore);

  function copyCysPairedProteinExtinctionCoefficientsOnClick(
    e: MouseEvent
  ) {
    e.preventDefault();
    navigator.clipboard.writeText(
      String(proteinExtinctionCoefficients)
    );
  }
  function copyCysReducedProteinExtinctionCoefficientsOnClick(
    e: MouseEvent
  ) {
    e.preventDefault();
    navigator.clipboard.writeText(
      String(proteinExtinctionCoefficients)
    );
  }
  function copyCysPairedProteinAbsOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(
      String(proteinExtinctionCoefficients)
    );
  }
  function copyCysReducedProteinAbsOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(
      String(proteinExtinctionCoefficients)
    );
  }

  let cysPaired: String = '0';
  let cysReduced: String = '0';
  let absCysPaired: String = '0';
  let absCysReduced: String = '0';

  if (proteinExtinctionCoefficients !== 0) {
    cysPaired = Number(
      proteinExtinctionCoefficients.extinctionCoefficientCysPaired
    ).toFixed(2);
    cysReduced = Number(
      proteinExtinctionCoefficients.extinctionCoefficientCysReduced
    ).toFixed(2);
    absCysPaired = Number(
      proteinExtinctionCoefficients.absCysPaired
    ).toFixed(2);
    absCysReduced = Number(
      proteinExtinctionCoefficients.absCysReduced
    ).toFixed(2);
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Extinction coefficients</p>
      <p className="countSubHeading">Cys paired</p>
      <p
        className="countItem"
        aria-label="proteinExtinctionCoefficientsCysPaired"
      >
        {' '}
        Abs 0.1%: {absCysPaired}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyCysPairedProteinAbsOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p
        className="countItem"
        aria-label="proteinExtinctionCoefficientsCysPaired"
      >
        {' '}
        Ext coe: {cysPaired}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyCysPairedProteinExtinctionCoefficientsOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p className="countSubHeading">Cys reduced</p>
      <p
        className="countItem"
        aria-label="proteinExtinctionCoefficientsCysReduced"
      >
        {' '}
        Abs 0.1%: {absCysReduced}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyCysReducedProteinAbsOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
      <p
        className="countItem"
        aria-label="proteinExtinctionCoefficientsCysReduced"
      >
        {' '}
        Ext coe: {cysReduced}{' '}
        <span
          className="material-symbols-outlined"
          onClick={copyCysReducedProteinExtinctionCoefficientsOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </span>
      </p>
    </div>
  );
}
