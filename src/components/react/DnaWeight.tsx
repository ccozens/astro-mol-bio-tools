import { useStore } from '@nanostores/react';
import { inputStore } from '../../stores/input';
import {
  approxRnaFromLength,
  approxSsDnaFromLength,
  approxDsDnaFromLength,
  approxRnaMw,
  approxSsDnaMw,
  approxDsDnaMw,
  exactRnaMw,
  exactSsDnaMw,
  exactDsDnaMw,
} from '../../functions/dnaWeight';
import { useState, ChangeEvent } from 'react';
import type { AriaLabelProps } from '../../types';

export default function DnaWeight({
  ariaLabelContent,
}: AriaLabelProps) {
  // data from input
  const sanitisedInputFromStore = useStore(inputStore);
  const [lengthInput, setLengthInput] = useState(0);

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    const onlyNums = e.target.value.replace(/\D/g, '');
    setLengthInput(Number(onlyNums));
  };

  if (sanitisedInputFromStore.includes('Non-DNA')) {
    return <div className="outputBox">{sanitisedInputFromStore}</div>;
  }

  // DNA / RNA toggle
  // const isDna = useStore(dnaRnaStore);
const len = 0;
  let calcApproxSsDnaFromLength: number = 0;
  let calcApproxDsDnaFromLength: number = 0;
  let calcApproxSsDnaMw: number = 0;
  let calcApproxDsDnaMw: number = 0;
  let calcExactSsDnaMw: number = 0;
  let calcExactDsDnaMw: number = 0;


    //DNA
    calcApproxSsDnaFromLength = approxSsDnaFromLength(lengthInput);
    calcApproxDsDnaFromLength = approxDsDnaFromLength(lengthInput);
    calcApproxSsDnaMw = approxSsDnaMw(sanitisedInputFromStore);
    calcApproxDsDnaMw = approxDsDnaMw(sanitisedInputFromStore);
    calcExactSsDnaMw = exactSsDnaMw(sanitisedInputFromStore);
    calcExactDsDnaMw = exactDsDnaMw(sanitisedInputFromStore);
  
  /*   // RNA
    let calcApproxRnaFromLength: number = 0
    let calcApproxRnaMw: number = 0;
    let calcExactRnaMw: number = 0;
  
    calcApproxRnaFromLength = approxRnaFromLength(lengthInput);
    calcApproxRnaMw = approxRnaMw(sanitisedInputFromStore);
    calcExactRnaMw = exactRnaMw(sanitisedInputFromStore); */
  

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Approx weights from length</p>
      <input id="dnaLengthInput"
      className="textArea"
      value={lengthInput}
      onChange={handleInput}
      type="text"
      />
      <p className="countItem">
        {Number(calcApproxSsDnaFromLength/1000).toFixed(2) +" kD"}
      </p>
      <p className="countItem">
        {Number(calcApproxDsDnaFromLength/1000).toFixed(2) +" kD"}
      </p>
      <p className="countHeading">Approx weights from sequence</p>
      <p className="countItem">
        {Number(calcApproxSsDnaMw/1000).toFixed(2)+" kD"}
      </p>
      <p className="countItem">
        {Number(calcApproxDsDnaMw/1000).toFixed(2)+" kD"}
      </p>
      <p className="countHeading">Exact weights</p>
      <p className="countItem">
        {Number(calcExactDsDnaMw/1000).toFixed(2)+" kD"}
      </p>
      <p className="countItem">
        {Number(calcExactSsDnaMw/1000).toFixed(2)+" kD"}
      </p>
    </div>
  );
}
