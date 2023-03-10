import { useStore } from '@nanostores/react';
import { countNucleotides } from '../../functions/utilFunctions/countNucleotides';
import { inputStore } from '../../stores/input';


interface LabelProps {
  ariaLabelContent: string;
}

export default function CountNucleotides({
  ariaLabelContent,
}: LabelProps) {
  const sanitisedInputFromStore = useStore(inputStore);
  const ntCounts = countNucleotides(sanitisedInputFromStore);
  const total = sanitisedInputFromStore.length;

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Nucleotide Counts</p>
      {Object.entries(ntCounts).map(([key, value]) => {
        return (
          <p className="countItem" key={key}>
            {key}: {value}
          </p>
        );
      })}
    </div>
  );
}