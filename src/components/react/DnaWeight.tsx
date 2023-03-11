import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  approxRnaMw,
  approxSsDnaMw,
  approxDsDnaMw,
  exactRnaMw,
  exactSsDnaMw,
  exactDsDnaMw,
} from '../../functions/dnaWeight';
import { dnaRnaStore } from '../../stores/dnaRnaStore';
import DnaRnaToggleButton from './DnaRnaToggleButton';
import { Molecule } from '../../types';
import { checkDnaInput } from '../../functions/checkDnaInput';
interface LabelProps {
  ariaLabelContent: string;
}

export default function DnaWeight({ ariaLabelContent }: LabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);
      // check input
      const checkedInput = checkDnaInput(sanitisedInputFromStore, Molecule.Dna);
      if (checkedInput.includes('Non-DNA')) {
         return <div className="outputBox">
                  {checkedInput}
                </div> }


  // DNA / RNA toggle
  const isDna = useStore(dnaRnaStore);

  let calcApproxSsDnaMw: number = 0;
  let calcApproxDsDnaMw: number = 0;
  let calcExactSsDnaMw: number = 0;
  let calcExactDsDnaMw: number = 0;
  let calcApproxRnaMw: number = 0;
  let calcExactRnaMw: number = 0;

  if (isDna) {
    calcApproxSsDnaMw = approxSsDnaMw(sanitisedInputFromStore);
    calcApproxDsDnaMw = approxDsDnaMw(sanitisedInputFromStore);
    calcExactSsDnaMw = exactSsDnaMw(sanitisedInputFromStore);
    calcExactDsDnaMw = exactDsDnaMw(sanitisedInputFromStore);
  }
  if (!isDna) {
    calcApproxRnaMw = approxRnaMw(sanitisedInputFromStore);
    calcExactRnaMw = exactRnaMw(sanitisedInputFromStore);
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx weight</p>
      <DnaRnaToggleButton />
      <p className="countItem">{isDna && Number(calcApproxSsDnaMw).toFixed(2)}</p>
      <p className="countItem">{isDna && Number(calcApproxDsDnaMw).toFixed(2)}</p>
      <p className="countItem">{isDna && Number(calcExactSsDnaMw).toFixed(2)}</p>
      <p className="countItem">{isDna && Number(calcExactDsDnaMw).toFixed(2)}</p>
      <p className="countItem">{!isDna && Number(calcApproxRnaMw).toFixed(2)}</p>
      <p className="countItem">{!isDna && Number(calcExactRnaMw).toFixed(2)}</p>
      <p className="weightItem"></p>
    </div>
  );
}
