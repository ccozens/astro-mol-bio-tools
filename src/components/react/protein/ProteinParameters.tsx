import type { InputLabelProps } from '../../../types';
import { inputStore } from '../../../stores/input';
import { useStore } from '@nanostores/react';
import type { MouseEvent } from 'react';
import { computeProteinMW } from '../../../functions/computeProteinMW';
import { computeExtinctionCoefficients } from '../../../functions/computeExtinctionCoefficients';


export default function ProteinParameters({
  ariaLabelContent,
}: InputLabelProps) {
// get input from store
const sanitisedInputFromStore = useStore(inputStore);

// set all to zero as default
const proteinLength = sanitisedInputFromStore === '' ? 0 : sanitisedInputFromStore.length;
// proteinMW
const proteinMW = sanitisedInputFromStore === '' ? 0 : computeProteinMW(sanitisedInputFromStore);
// extinction coefficients
const extinctionCoefficients = sanitisedInputFromStore === '' ? {
    extinctionCoefficientCysPaired: 0,
    extinctionCoefficientCysReduced: 0,
    absCysPaired: 0,
    absCysReduced: 0,
} : computeExtinctionCoefficients(sanitisedInputFromStore, proteinMW);


// destructure extinctionCoefficients
const {
    extinctionCoefficientCysPaired,
    extinctionCoefficientCysReduced,
    absCysPaired,
    absCysReduced,
} = extinctionCoefficients;



  // event handlers for copy buttons
  function copyProteinLengthOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinLength));
  }
  function copyProteinMwOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMW));
  }
  function copyCysPairedOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMW));
  }
  function copyCysReducedOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMW));
  }
  function copyAbsCysPairedOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMW));
  }
  function copyAbsCysReducedOnClick(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(String(proteinMW));
  }

  return (
    <div className="innerOutputBox innerOutputBoxProtParams" aria-label={ariaLabelContent}>
      <div className="proteinParamsOutputGrid">

      <div className="protParamsGridItem">Length</div>
        <div className="protParamsCountItem" aria-label="proteinLength">
          {' '}
          {proteinLength}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyProteinLengthOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>

        <div className="protParamsGridItem">Molecular Weight</div>
        <div className="protParamsCountItem" aria-label="proteinMw">
          {' '}
          {Number(proteinMW / 1000).toFixed(2)}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyProteinMwOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>
        
        <div className="protParamsGridItem">EC (Cys paired)</div>
        <div
          className="protParamsCountItem"
          aria-label="extinction coefficient cys Paired"
        >
          {' '}
          {Number(extinctionCoefficientCysPaired).toFixed(2)}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyCysPairedOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>

        <div className="protParamsGridItem">EC (Cys reduced)</div>
        <div
          className="protParamsCountItem"
          aria-label="extinction coefficient cys Reduced"
        >
          {' '}
          {Number(extinctionCoefficientCysReduced).toFixed(2)}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyCysReducedOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>

        <div className="protParamsGridItem">A280 (Cys paired)</div>
        <div className="protParamsCountItem" aria-label="A280 cys Paired">
          {' '}
          {Number(absCysPaired).toFixed(2)}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyAbsCysPairedOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>

        <div className="protParamsGridItem">A280 (Cys reduced)</div>
        <div className="protParamsCountItem" aria-label="A280 Cys Reduced">
          {' '}
          {Number(absCysReduced).toFixed(2)}
        </div>
        <div
          className="protParamsGridItem material-symbols-outlined"
          onClick={copyAbsCysReducedOnClick}
        >
          content_copy
          <span className="copyTip">Copy data</span>
        </div>
        <div className="protParamsGridUnits1">
        MW is in kD.
        </div>
        <div className="protParamsGridUnits2">

        Extinction coefficients are M<sup>-1</sup> cm<sup>-1</sup>{' '}
          at 280 nm in water.
        </div>
        <div className="protParamsGridUnits3">
          A<sub>280</sub> = Abs 0.1% (1 g/l)
        </div>
            
        
      </div>
    </div>
  );
}
