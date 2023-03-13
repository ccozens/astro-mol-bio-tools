import { useStore } from '@nanostores/react';
import { countNucleotides } from '../../functions/utilFunctions/countNucleotides';
import { inputStore } from '../../stores/input';
import { dnaRnaStore } from '../../stores/dnaRnaStore';
import type { AriaLabelProps } from '../../types';


export default function CountNucleotides({
  ariaLabelContent,
}: AriaLabelProps) {
  
  const isDna = useStore(dnaRnaStore);
  
  const sanitisedInputFromStore = useStore(inputStore);
  const ntCounts = countNucleotides(sanitisedInputFromStore);
  
  if (!isDna) {({})}

  
  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Nucleotide Counts</p>
      <hr />
      {Object.entries(ntCounts).map(([key, value]) => {
        return (
          <p className="countItem" key={key}>
            {key}: {value.isInteger ? value : Number(value.toFixed(3))}
          </p>
        );
      })}
    </div>
  );
}
