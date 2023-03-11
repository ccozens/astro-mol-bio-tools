import { useStore } from '@nanostores/react';
import {
  approxRnaMw,
  approxSsDnaMw,
  approxDsDnaMw,
  exactRnaMw,
  exactSsDnaMw,
  exactDsDnaMw,
} from '../../functions/dnaWeight';
import { inputStore } from '../../stores/input';
import DnaRnaToggleButton from './DnaRnaToggleButton';

interface LabelProps {
  ariaLabelContent: string;
}

export default function DnaWeight({ ariaLabelContent }: LabelProps) {
  const sanitisedInputFromStore = useStore(inputStore);

  const calcApproxRnaMw = approxRnaMw(sanitisedInputFromStore);
  const calcApproxSsDnaMw = approxSsDnaMw(sanitisedInputFromStore);
  const calcApproxDsDnaMw = approxDsDnaMw(sanitisedInputFromStore);
  const calcExactRnaMw = exactRnaMw(sanitisedInputFromStore);
  const calcExactSsDnaMw = exactSsDnaMw(sanitisedInputFromStore);
  const calcExactDsDnaMw = exactDsDnaMw(sanitisedInputFromStore);

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx weight</p>
      <DnaRnaToggleButton />
      
      <p className="weightItem"></p>
    </div>
  );
}
